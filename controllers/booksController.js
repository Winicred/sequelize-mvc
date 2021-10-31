const Book = require("../models/book")
const {Op} = require("sequelize");
const Category = require("../models/category");

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

    const book =
        {
            name: req.body.title,
            isbn: req.body.isbn,
            pageCount: req.body.pageCount,
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            publishedDate: req.body.publishedDate
        }


    Book.update(book, {where: {id: req.params.id}}).then(() => {
        Book.findOne({where: {id: req.params.id}}).then(data => {
            res.send(data)
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the book."
        })
    })
}

exports.delete = (req, res) => {
    Book.findOne({where: {id: req.params.id}}).then(data => {
        Book.destroy({where: {id: req.params.id}})
        if (data !== null) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
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