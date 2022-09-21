const fs = require('fs');

const content = fs.readFileSync('../static-files/README.md', 'utf8');

module.exports = content
