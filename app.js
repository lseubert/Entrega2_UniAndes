const path = require('path');
const express = require('express');
const router = require('./routes');

const app = express();


// ? 1) MIDDLEWARES
//Serving static files
app.use(express.static(path.join(__dirname, '/public'))); //! TO OPEN STATIC FILES (e.g. HTML files)


// ? 2) ROUTES

app.use(router);

module.exports = app;
