const express = require('express');
const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const app = express();
const publicPath = path.join(rootPath, 'public');
const staticData = path.join(publicPath, 'data');

app.set('view engine', 'ejs');

module.exports = { express, app, rootPath, publicPath, staticData };