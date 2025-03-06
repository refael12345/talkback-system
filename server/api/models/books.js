const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    pageCount: {
        type: Number,
        required: true,
    },
    nextBook: {
        type: mongoose.Types.ObjectId,
        ref: 'books',
    },
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;