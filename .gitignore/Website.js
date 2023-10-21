const express = require('express');
require('dotenv').config()
require('./models/db');

const app = express()

app.get('/', (req, res) => {
    res.send('<h1 style="color: red;">Hello world</h1>')

})