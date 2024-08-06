require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//Defining Table structure
const Book = sequelize.define('Book', {
  isbn13: {
    type: Sequelize.STRING(13),
    allowNull: false,
    primaryKey: true,
    validate: {
      len: [13, 13],
      isNumeric: true,
    },
  },
  isbn10: {
    type: Sequelize.STRING(10),
    allowNull: true,
    validate: {
      len: [10, 10],
      isNumeric: true,
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  subtitle: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  authors: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  categories: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  thumbnail: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  published_year: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
    },
  },
  average_rating: {
    type: Sequelize.DECIMAL(3, 2),
    allowNull: true,
    validate: {
      min: 0,
      max: 5,
    },
  },
  num_pages: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
    },
  },
  ratings_count: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
    },
  },
}, {
  tableName: 'books',
  timestamps: false,
  indexes: [
    {
      fields: ['title'],
    },
    {
      fields: ['authors'],
    },
  ],
});

module.exports = { sequelize, Book };