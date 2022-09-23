const server = require('./server/server');
require('./routes/route')

server.listen(3030);
console.log("Server started on: http://localhost:3030");