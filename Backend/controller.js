'use strict';

const express = require('express');
const router = express.Router();
const todos = require('./data/todos');

// Get all todos
router.get("/", (req, res) => {

});

// Create a new todo
router.post("/", (req, res) => {

});

// Find a todo with the id
router.get("/:id", (req, res) => {

});

// Update a todo with the id
router.put("/:id", (req, res) => {

});

// Delete a todo with the id
router.delete("/:id", (req, res) => {

});

module.exports = router;
