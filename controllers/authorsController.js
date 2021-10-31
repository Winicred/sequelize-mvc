const Author = require("../models/author")
const {Op} = require("sequelize");
const Category = require("../models/category");

exports.findAll = (req, res) => {
    Author.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authors."
        })
    })
}

exports.findOneById = (req, res) => {
    console.log(req.params)
    Author.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving authors."
        })
    })
}

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
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

exports.update = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    Author.update({name: req.body.name}, {where: {id: req.params.id}}).then(() => {
        Author.findOne({where: {id: req.params.id}}).then(data => {
            res.send(data)
        })
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the author."
        })
    })
}

exports.delete = (req, res) => {
    Author.findOne({where: {id: req.params.id}}).then(data => {
        Author.destroy({where: {id: req.params.id}})
        if (data !== null) {
            res.send(data)
        } else {
            res.status(404).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the author."
        })
    })
}

exports.findAllByName = (req, res) => {
    Author.findAll({where: {name: {[Op.like]: `${req.params.name}%`}}}).then(data => {
        if (data.length !== 0) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving author(s)."
        })
    })
}