const BookService = require("../services/BookService");
const apiResponse = require("../helpers/apiResponse");
var mongoose = require("mongoose");


const bookList = [
	async (req, res) => {
		try {
			var bookResponse = await BookService.bookList();
			return apiResponse.successResponseWithData(res,"Book List", bookResponse);

		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}];


const bookAdd = [
	async (req, res)=>{
		try {
			var book = { 	
				title: req.body.title,
				description: req.body.description,
				isbn: req.body.isbn,
				author: req.body.author,
				price: req.body.price,
				discount: req.body.discount,
				cover: req.body.cover
			}
			var bookResponse = await BookService.addBook(book);
			await req.body.categories.forEach(item => {
				BookService.addBookCategories(bookResponse._id, item);
			});
			return apiResponse.successResponseWithData(res,"Book add Success.", bookResponse);

		} catch (err) {
			return apiResponse.ErrorResponse(res, err);
		}
	}
]
module.exports={bookList, bookAdd}