const { sequelize, Book } = require('../models/bookModel');
const { Op } = require('sequelize');

// Initialize Database connection
async function initialize() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error initializing database:', error);
    throw new Error('Database initialization failed');
  }
}

// Function to retrieve book's data
async function getBooks(page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  try {
    const { count, rows } = await Book.findAndCountAll({
      order: [['isbn13', 'ASC']],
      limit,
      offset,
    });
    return {
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      books: rows,
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Error fetching books');
  }
}

// Function to search books
// async function searchBooks({ title, author, category }) {
//   const where = {};
//   if (title) where.title = { [Op.iLike]: `%${title}%` };
//   if (author) where.authors = { [Op.iLike]: `%${author}%` };
//   if (category) where.categories = { [Op.iLike]: `%${category}%` };

//   try {
//     const books = await Book.findAll({ where });
//     return books;
//   } catch (error) {
//     console.error('Error searching books:', error);
//     throw new Error('Error searching books');
//   }
// }
async function searchBooks({ title, author, category }, page = 1, limit = 10) {
  const offset = (page - 1) * limit;
  const where = {};
  if (title) where.title = { [Op.iLike]: `%${title}%` };
  if (author) where.authors = { [Op.iLike]: `%${author}%` };
  if (category) where.categories = { [Op.iLike]: `%${category}%` };

  try {
    const { count, rows } = await Book.findAndCountAll({
      where,
      limit,
      offset,
    });
    return {
      totalItems: count,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      books: rows,
    };
  } catch (error) {
    console.error('Error searching books:', error);
    throw new Error('Error searching books');
  }
}



async function addBook(bookData) {
  try {
    const newBook = await Book.create(bookData);
    return newBook;
  } catch (error) {
    console.error('Error adding book:', error);
    throw new Error('Error adding book');
  }
}

async function updateBook(isbn13, bookData) {
  try {
    const [updated] = await Book.update(bookData, {
      where: { isbn13 },
    });

    if (updated) {
      const updatedBook = await Book.findOne({ where: { isbn13 } });
      return updatedBook;
    } else {
      throw new Error('Book not found');
    }
  } catch (error) {
    console.error('Error updating book:', error);
    throw new Error('Error updating book');
  }
}

async function deleteBook(isbn13) {
  try {
    const deleted = await Book.destroy({
      where: { isbn13 },
    });

    if (deleted) {
      return true;
    } else {
      throw new Error('Book not found');
    }
  } catch (error) {
    console.error('Error deleting book:', error);
    throw new Error('Error deleting book');
  }
}

async function getBookByIsbn(isbn13) {
  try {
    const book = await Book.findOne({
      where: { isbn13 },
    });
    if (book) {
      return book;
    } else {
      throw new Error(`Book not found with isbn: ${isbn13}`);
    }
  } catch (error) {
    console.error('Error getting Book by isbn:', error);
    throw new Error('Could not fetch the Book');
  }
}

module.exports = {
  initialize, 
  getBooks, 
  searchBooks, 
  addBook, 
  updateBook, 
  deleteBook, 
  getBookByIsbn 
};
