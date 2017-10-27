'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./controller');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use("/todo", routes);

app.listen(8080, () => {
    console.log('Listening on port 8080!');
});