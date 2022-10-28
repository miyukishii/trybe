const { Book } = require('../models');

// método getAll para retornar uma lista de livros por meio do model Book
const getAll = async () => {
    const books = await Book.findAll();
    return books;
};

// método findAll para retornar livros por meio autor 
const getByAuthor = async (author) => {
    const books = await Book.findAll({ where: { author }});
    return books;
};

// método findByPk do Sequelize que recebe um id como parâmetro e usa o model Book para buscar esse livro.
const getById = async (bookId) => {
    const book = await Book.findByPk(bookId);
    return book;
};

//  método create do Sequelize para salvar um book no banco.
const insertBook = async (bookData) => {
    const newBook = await Book.create(bookData);
    return newBook;
};

// método update que recebe dois parâmetros: o id do livro a ser alterado e um objeto com os atributos title, author, pageQuantity e atualize o livro utilizando o model Book.
const updateBook = async (id, dataToUpdate) => {
    const [book] = await Book.update(
        dataToUpdate,
        { where: { id } },
      );

    console.log(book);
    return book;
};

// método destroy que recebe o id do livro a ser removido e remova o mesmo utilizando o model Book.
const removeBook = async (id) => {
    const deletedBook = await Book.destroy({ where: { id } });

    console.log(deletedBook);
    return deletedBook;
}

module.exports = {
    getAll,
    getByAuthor,
    getById,
    insertBook,
    updateBook,
    removeBook,
};
  