const express = require('express');
const booksRouter = require('./routers/books.js');

const apiRouter = express.Router();

apiRouter.use('/book', booksRouter);

module.exports = apiRouter;