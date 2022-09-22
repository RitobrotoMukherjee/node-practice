const express = require('express');
const path = require('path');

const rootPath = path.resolve(__dirname, '../');
const app = express();
const publicPath = path.join(rootPath, 'public');

module.exports = { express, app, rootPath, publicPath };