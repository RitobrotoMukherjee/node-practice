const { publicPath } = require('../config');

const filterReq = (req, resp, next) => {
    const age = req.query?.age;
    if(age && age > 12) {
        next();
    } else if(age && age <= 12) {
        resp.render('error', { age });
    }
    else {
        resp.setHeader('Content-Type', 'text/html');
        resp.sendFile(`${publicPath}/no-param.html`);
    }
}

module.exports = filterReq;