const http = require('http');
const content = require('./file_system');
const writer = require('./self_invoking/write_files');

module.exports = http.createServer((req, res) => {
    console.log('Server Starting');
    writer(content);
    res.write(`<h1>README Updated</h1>`);
    res.end();
});