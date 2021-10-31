const Category = require("../models/category")
const {Op} = require("sequelize");

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return
    }

    const category = {
        name: req.body.name
    }

    Category.create(category).then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Category."
        })
    })
}

exports.findAll = (req, res) => {
    Category.findAll().then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
        })
    })
}

exports.findOneById = (req, res) => {
    Category.findOne({where: {id: req.params.id}}).then(data => {
        if (data !== null) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving categories."
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

    Category.update({name: req.body.name}, {where: {id: req.params.id}}).then(() => {
        if (res.statusCode === 200) {
            res.status(200).send({message: "Category updated successfully."})
        } else {
            res.status(500).send({message: "Some error occurred while updating the category."})
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the new category."
        })
    })
}

exports.delete = (req, res) => {
    Category.destroy({where: {id: req.params.id}})
        .then(data => {
            if (data === 1) {
                res.status(200).send({message: "Category deleted successfully."})
            } else {
                res.status(500).send({message: "Some error occurred while deleting the category."})
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while deleting the category."
            })
        })
}

exports.findAllByName = (req, res) => {
    Category.findAll({where: {name: {[Op.like]: `${req.params.name}%`}}}).then(data => {
        if (data.length !== 0) {
            res.send(data)
        } else {
            res.status(204).send()
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving category(ies)."
        })
    })
}