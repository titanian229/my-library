const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    publishedDate: String,
    description: String,
    pageCount: String,
    link: String,
    googleId: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
