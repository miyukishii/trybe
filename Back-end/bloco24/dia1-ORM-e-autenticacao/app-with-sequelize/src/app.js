// src/app.js

const express = require('express');

const User = require('./controllers/user.controller');
const Book = require('./controllers/book.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);
app.get('/books', Book.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/user/:id', User.getById);
app.get('/books/:id', Book.getById);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
app.get('/user/search/:id', User.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/user', User.createUser);
app.post('/books', Book.insertBook);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/user/:id', User.updateUser);
app.put('/books/:id', Book.updateBook);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/user/:id', User.deleteUser);
app.delete('/books/:id', Book.removeBook);

module.exports = app;