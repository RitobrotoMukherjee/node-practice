const { app, publicPath, date } = require('../config');

const commonObject = {
    publicPath, date, title: "Parctice App"
}

app.get('/', (_, resp) => {
    resp.render('home', { ...commonObject, title: "Home Page Node EJS" });
});

app.get('/profile', (_, resp) => {
    resp.render('profile', { ...commonObject, title: "Profile Page Node EJS" });
});

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});

module.exports = app;