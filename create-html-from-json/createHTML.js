const data = require('./data/data.json');

const htmlArr = data.map(el => 
    `<div id=${el.id}>
        <h3>${el.name}</h3>
        <p>${el.job}</p>
    </div><hr/>`
);

const html = (innerHTML) => {
    return new Promise((resolve, reject) => {
        if(innerHTML.length) {
            resolve(`<div>${innerHTML.reduce((prev, next) => `${prev + next}`, ``)}</div>`);
        }
        reject("Cannot create html");
    });
}

module.exports = { html, htmlArr };