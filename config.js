const { app, express }  = require('./server/server');

const path = require('path');
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.set('view engine', 'ejs');

module.exports = { app, publicPath };