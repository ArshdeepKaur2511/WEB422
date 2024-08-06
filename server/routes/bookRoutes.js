const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Get all books with pagination
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  try {
    const books = await bookController.getBooks(page, limit);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Search for books
// router.get('/search', async (req, res) => {
//   const { title, author, category } = req.query;
//   try {
//     const books = await bookController.searchBooks({ title, author, category });
//     res.status(200).json(books);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get('/search', async (req, res) => {
    const { title, author, category, page = 1, limit = 10 } = req.query;
    try {
      const books = await bookController.searchBooks({ title, author, category }, parseInt(page), parseInt(limit));
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Get a book by ISBN
router.get('/:isbn13', async (req, res) => {
  const { isbn13 } = req.params;
  try {
    const book = await bookController.getBookByIsbn(isbn13);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

// Add a new book
router.post('/', async (req, res) => {
  try {
    const newBook = await bookController.addBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a book by ISBN
router.put('/:isbn13', async (req, res) => {
  const { isbn13 } = req.params;
  try {
    const updatedBook = await bookController.updateBook(isbn13, req.body);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a book by ISBN
router.delete('/:isbn13', async (req, res) => {
  const { isbn13 } = req.params;
  try {
    const success = await bookController.deleteBook(isbn13);
    if (success) {
      res.status(204).send();
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;