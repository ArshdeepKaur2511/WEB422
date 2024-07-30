const bookData = require('./modules/books');
const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');

const HTTP_PORT = process.env.PORT || 8080;

// Middleware for serving static files
app.use(cors());
app.use(express.urlencoded({ extended: true }));
  
app.get('/book', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
  
    try {
      const { count, rows } = await bookData.Book.findAndCountAll({
        order: ['ISBN'],
        limit: limit,
        offset: offset,
      });
  
      const totalPages = Math.ceil(count / limit);
  
      res.json({
        totalItems: count,
        totalPages: totalPages,
        currentPage: page,
        books: rows,
      });
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send('Error fetching books');
    }
  });
  

  // Initialize data and start server
bookData.initialize().then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`Server running on: http://localhost:${HTTP_PORT}`);
    });
}).catch(err => {
    console.error('Unable to start server:', err);
});
  
module.exports = app;