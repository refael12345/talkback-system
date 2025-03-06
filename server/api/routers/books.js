const express = require('express');
const {
    getAllBooks,
    getBookById,
    addBook,
    editBookById,
    deleteBookById,
    getSeriesById,
    getPreviousBookById,
} = require('../controllers/books.js');

const booksRouter = express.Router();

booksRouter.get('/', getAllBooks);
booksRouter.get('/:id', getBookById);
booksRouter.get('/:id/series', getSeriesById);
booksRouter.get('/:id/previous', getPreviousBookById);
booksRouter.post('/', addBook);
booksRouter.patch('/:id', editBookById);
booksRouter.delete('/:id', deleteBookById);

module.exports = booksRouter;