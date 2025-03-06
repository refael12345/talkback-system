const Book = require('../models/books.js');

const getAllBooks = async (req, res)=>{
    try {
        const books = await Book.find();
        res.status(200).json({success: true, data: books});
    } catch(e){
        res.status(400).json({success: false, error: e.toString()});
    }
};

const getBookById = async (req, res)=>{
    const {id} = req.params;
    try {
        const book = await Book.findById(id);
        if (!book)
            return res.status(404).json({success: false, error: 'Book not found'});
        res.status(200).json({success: true, data: book});
    } catch(e){
        res.status(400).json({success: false, error: e.toString()});
    }
};

const addBook = async (req, res)=>{
    // req.body := {title, author, publisher, pageCount, nextBook?}
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json({success: true, data: book});
    } catch(e){
        res.status(400).json({success: false, error: e.toString()});
    }
};

const editBookById = async (req, res)=>{
    const {id} = req.params;
    try {
        const book = await Book.findByIdAndUpdate(id, req.body, {new: true, runValidatiors: true});
        if (!book)
            return res.status(404).json({success: false, error: 'Book not found'});
        res.status(200).json({success: true, data: book});
    } catch(e){
        res.status(400).json({success: false, error: e.toString()});
    }
};

const deleteBookById = async (req, res)=>{
    const {id} = req.params;
    try {
        const book = await Book.findByIdAndDelete(id);
        if (!book)
            return res.status(404).json({success: false, error: 'Book not found'});
        res.status(200).json({success: true, data: book});
    } catch(e){
        res.status(400).json({success: false, error: e.toString()});
    }
};

const getSeriesById = async (req, res)=>{
   // const {id} = req.params;
    try{
        const books = [];
        let currentId = req.params.id;
        while(currentId){
            const book = await Book.findById(currentId);
            if(!book)
                return res.status(404).json({success: false, error: "book not found"});
                books.push(book);
                currentId = book.nextBook;
        }
        res.status(200).json({success: true, data: books});
    }catch(e){
        res.status(400).json({success: false, error:e.toString()});
    }
}

const getPreviousBookById = async (req, res)=>{
    const{id} = req.params;
    try{
        const book = await Book.findOne({nextBook: id});
        if(!book)
            return res.status(404).json({success: false, error: 'no previous book'});
        res.status(200).json({success: true, data: book});
    }catch(e){
        res.status(400).json({success: false, error: e.toString()})
    }
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    editBookById,
    deleteBookById,
    getSeriesById,
    getPreviousBookById,
};