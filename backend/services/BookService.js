const Book = require("../models/Book");
const Author = require("../models/Author");
const Categories = require("../models/Categories");
var mongoose = require("mongoose");


exports.addBook = async function(book) {
    return Book.create(book).then(book => {
        return book;
    });
};

exports.addBookCategories = async function(bookId, category) {
    return Book.findByIdAndUpdate(
        bookId,
        {
            $push: {
                categories: {
                    _id: category._id,
                    name: category.name
                }
            }
        },
        { new: true, useFindAndModify: false }
    ).then(bookCategory=>{return bookCategory;});
};

exports.bookList = async function(){
    var bookResult = [];
    var books = await Book.find();
    
    for (let i = 0; i < books.length; i++) {
        
        bookResult.push({
            _id: books[i]._id,
            title: books[i].title,
            description: books[i].description,
            isbn: books[i].isbn,
            price: books[i].price,
            discount: books[i].discount,
            author: await Author.findOne({ _id: books[i].author }).exec(),
            categories: await Categories.find({ _id: { $in: books[i].categories } })
        });
    }
    return bookResult;
}