const { app, publicPath } = require('../config');


app.get('/', (_, resp) => {
    resp.render('home', { publicPath, title: 'Home Page' })
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});

module.exports = app;