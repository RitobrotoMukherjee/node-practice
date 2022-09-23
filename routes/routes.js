const { app, router } = require('../config');
const middleware = require('../middleware/middleware');


/* 
 * To apply througout all the routes in the application
 *
 * app.use(middleware);
*/

router.use(middleware);

app.get('/', (_, resp) => {
    resp.render('home');
});

router.get('/user', (req, resp) => {
    const { age } = req.query;
    resp.render('user', { age });
});

router.get('/profile', (req, resp) => {
    const { age } = req.query;
    resp.render('user-profile', { age });
});

app.use('/', router);

module.exports = app;
