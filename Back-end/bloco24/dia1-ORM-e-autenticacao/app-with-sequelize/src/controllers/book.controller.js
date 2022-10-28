const BookService = require('../services/book.service');

const error500Message = 'Something went wrong';

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    if (author) {
      console.log(author);
      const books = await BookService.getByAuthor(author);
      return res.status(200).json(books);
    }
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const book = await BookService.getById(id);

      if (book) return res.status(200).json(book);
      return res.status(404).json({ message: "Book not found" });
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
};

const insertBook = async (req, res) => {
    try {
      const newBook = await BookService.insertBook(req.body);
      return res.status(201).json(newBook);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
};

const updateBook = async (req, res) => {
    try {
    //   const { title, author, pageQuantity } = req.body;
      const { id } = req.params;
      const updatedUser = await BookService.updateBook(id, req.body);
  
      if (!updatedUser) return res.status(404).json({ message: 'Book not found!' });
  
      return res.status(200).json({ message: 'Book updated!’' });    
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
};

const removeBook = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await BookService.removeBook(id);
  
      if (!deletedBook) return res.status(404).json({ message: 'Book not found!' });
  
      return res.status(200).json({ message: 'Book deleted!’' });    
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: error500Message });
    }
};

module.exports = {
    getAll,
    getById,
    insertBook,
    updateBook,
    removeBook,
};