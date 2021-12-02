var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: {type: String},
	description: {type: String},
	isbn: {type: String},
	price: {type: Number},
	discount: {type: Number},
	cover: {type: String},
	author: { type: Schema.ObjectId, ref: "Authors" },
    categories: [{
        category: { type: Schema.ObjectId, ref: 'Categories' }
      }]
}, {timestamps: true});

module.exports = mongoose.model("Books", BookSchema);