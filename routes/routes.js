const { app, publicPath } = require('../config');
const middleware = require('../middleware/middleware');

// To apply througout all the routes
// app.use(middleware);

app.get('/', (_, resp) => {
    resp.render('home');
});

app.get('/user', middleware, (req, resp) => {
    const { age } = req.query;
    resp.render('user', { age });
});

app.get("*", (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});

module.exports = app;
