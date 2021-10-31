const Book = require("../models/book")
const {Op} = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.title && !req.body.isbn) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const book = {
        title: req.body.title,
        isbn: req.body.isbn,
        pageCount: req.body.pageCount,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        publishedDate: req.body.publishedDate
    }

    Book.create(book).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the book."
        })
    })
}

exports.findAll = (req, res) => {
    Book.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        })
    })
}

exports.findOne = (req, res) => {
    Book.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving books."
        })
    })
}


exports.update = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    Book.update(
        {name: req.body.title},
        {name: req.body.title},
        {isbn: req.body.isbn},
        {shortDescription: req.body.shortDescription},
        {longDescription: req.body.longDescription},
        {publishedDate: req.body.publishedDate},
        {where: {id: req.params.id}}).then(() => {
        if (res.statusCode === 200) {
            res.status(200).send({message: "Book updated successfully."})
        } else {
            res.status(500).send({message: "Some error occurred while updating the book."})
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new book."
        })
    })
}

exports.delete = (req, res) => {
    Book.destroy({where: {id: req.params.id}})
        .then(data => {
            if (data === 1) {
                res.status(200).send({message: "Book deleted successfully."})
            } else {
                res.status(500).send({message: "Some error occurred while deleting the book."})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the book."
            })
        })
}

exports.findAllByName = (req, res) => {
    Book.findAll({where: {title: {[Op.like]: `${req.params.name}%`}}}).then(data => {
        if (data.length !== 0) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving book(s)."
        })
    })
}