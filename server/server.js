const express = require('express');
const cors = require('cors');
const app = express();
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const bookData = require('./controllers/bookController');
const {adminMiddleware, authMiddleware} = require('./middleware/authentication')

const HTTP_PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Use book routes
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);

// Protected route example
app.use('/api/admin', authMiddleware, adminMiddleware, (req, res) => {
  res.send('Admin route');
});

// Initialize data and start server
bookData.initialize().then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`Server running on: http://localhost:${HTTP_PORT}`);
    });
  }).catch(err => {
    console.error('Unable to start server:', err);
  });