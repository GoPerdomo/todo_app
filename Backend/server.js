'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./controller');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/todo", routes);

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.send('error');
});

app.listen(8080, () => {
    console.log('Listening on port 8080!');
});