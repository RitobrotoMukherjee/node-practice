const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, 'public');

app.use(express.static(publicPath));

module.exports = { app, publicPath };
