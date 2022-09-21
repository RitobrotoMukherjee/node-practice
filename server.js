const http = require('http');
const { html, htmlArr } = require('./createHTML');


const server = http.createServer((req, resp) => {
    console.log("Starting server:");

    html(htmlArr).then((html) => {
        resp.write(html);
    })
    .catch((e) => resp.write(`<h1>${e}</h1>`))
    .finally(() => {
        resp.end();
    });
});

module.exports = { http, server }