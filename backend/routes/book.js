var express = require("express");
const BooksController = require("../controllers/BooksController");

var router = express.Router();

router.get("/list", BooksController.bookList);

module.exports = router;