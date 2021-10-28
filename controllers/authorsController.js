const Author = require("../models/author")

exports.create = (req, res) => {
    if (!req.body.name) {
        req.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const author = {
        name: req.body.name
    }

    Author.create(author).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new author."
        })
    })
}

exports.findOne = (req, res) => {
    Author.findOne({
        where: {id: req.body.id}
    }).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authors."
        })
    })
}

exports.findAll = (req, res) => {
    Author.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authors."
        })
    })
}

