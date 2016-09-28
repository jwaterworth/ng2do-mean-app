'use strict';

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://ubuntu-vm-16/ng2todoapp', ['todos']);

/* GET ALL Todos */
router.get('/todos', (req, res, next) => {
    db.todos.find((err, todos) => {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

router.get('/todos/:id', (req, res, next) => {
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, (err, todos) => {
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});

router.post('/todo', (req, res, next) => {

});