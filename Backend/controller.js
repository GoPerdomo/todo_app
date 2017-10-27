'use strict';

const express = require('express');
const router = express.Router();
const todos = require('./data/todos');

// Get all todos
router.get("/", (req, res) => {
    res.json(todos);
});

// Create a new todo
router.post("/", (req, res) => {

});

// Find a todo with the id
router.get("/:id", (req, res, next) => {
    const requestedId = Number(req.params.id);
    for(let todo of todos) {
        if(todo._id === requestedId) {
            return res.json(todo);
        }
    }
    next();
});

// Update a todo with the id
router.put("/:id", (req, res, next) => {
    const requestedId = Number(req.params.id);
    const body = req.body;
    for(let todo of todos) {
        if(todo._id === requestedId) {
            if(body.todo !== undefined) todo.todo = body.todo;
            if(body.done !== undefined) todo.done = body.done;
            return res.json(todo);
        }
    }
    next();
});

// Delete a todo with the id
router.delete("/:id", (req, res) => {

});

module.exports = router;
