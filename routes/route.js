const { app, publicPath } = require('../config');

app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404.html`);
});