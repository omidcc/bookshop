var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var AuthorSchema = new Schema({
	name: {type: String},
	country: {type: String}  
}, {timestamps: true});

module.exports = mongoose.model("Authors", AuthorSchema);