const { express, app, publicPath, staticData } = require('../config/config');

/* Access static files using end extension. Here /public/static.html */
app.use(express.static(publicPath));

/* Access page without extension and with route */
app.get('/', (_, resp) => {
    resp.sendFile(`${publicPath}/home.html`);
});

/* Send basic html and use query params */
app.get('/hello-world', (req, resp) => {
    const { name } = req.query;

    if(name) resp.send(`<h1>Hello, ${name}</h1>`);
    else resp.send(`<h1>Hello, world!</h1>`)
});

/* Using EJS */
app.get('/profile', (_, resp) => {
    data = require(`${staticData}/user.json`);
    resp.render('profile', { data } );
});

module.exports = app;
