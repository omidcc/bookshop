var express = require("express");
require("dotenv").config();
var path = require("path");
var cors = require("cors");

//confgiure mongodb

var mongo = function(){
    var MONGODB_URL = process.env.MONGODB_URL;
    var mongoose = require("mongoose");
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        //don't show the log when it is test
        if(process.env.NODE_ENV !== "test") {
            console.log("Connected to %s", MONGODB_URL);
            console.log("App is running ... \n");
            console.log("Press CTRL + C to stop the process. \n");
        }
    })
    .catch(err => {
        console.error("App starting error:", err.message);
        process.exit(1);
    });
}

//configure express
var app = express();
var expr = () => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static(path.join(__dirname, "public")));
    app.use(cors());

    var port = process.env.PORT || '3000';
    app.listen(port, function() {
        console.log(`bookshop app listening on port ${port}!`)
    });
}

// use api-routes
var configRoutes = ()=>{
    var apiRouter = require("./routes/api");
    app.use('/api/', apiRouter);
    // throw 404 if URL not found
    var apiResponse = require("./helpers/apiResponse");
    app.all("*", function(req, res) {
        return apiResponse.notFoundResponse(res, "Page not found");
    });
    // throw 401 if unauthorized
    app.use((err, req, res) => {
        if(err.name == "UnauthorizedError"){
            return apiResponse.unauthorizedResponse(res, err.message);
        }
    });
}

//configure swagger for api-doc
var swgger = () => {
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('./swagger');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

mongo();
expr();
configRoutes();
swgger();