const db = require('../config/database')
const Book = require('../models/book')
const Category = require('../models/author')

const { DataTypes } = require('sequelize')
const Author = require('../models/author')

const BookAuthors = db.define('BookAuthors', {
    BookId: {
        type: DataTypes.INTEGER,
    },
    AuthorId: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false
})

Book.belongsToMany(Author, {
    through: BookAuthors,
    as: "authors"
})

Author.belongsToMany(Book, {
    through: BookAuthors,
    as: "books"
})

module.exports = BookAuthors