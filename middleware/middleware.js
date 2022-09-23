const { publicPath } = require('../config');

const filterReq = (req, resp, next) => {
    const checkAge = req.query?.age;
    if(checkAge && checkAge > 12) {
        next();
    } else if(checkAge && checkAge <= 12) {
        
    }
    else {
        resp.setHeader('Content-Type', 'text/html');
        resp.sendFile(`${publicPath}/no-param.html`);
    }
}

module.exports = filterReq;