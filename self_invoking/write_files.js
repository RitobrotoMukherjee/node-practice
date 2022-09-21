const fs = require('fs');

module.exports = (data) => fs.writeFile('./README.md', data, (err) => {
            if(err) console.log('Error writing file: ', err);
            else console.log('README Updated:');
        });
    