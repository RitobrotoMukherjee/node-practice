const mongoD = require('./mongodb');

// mongoD().then((connection) => {
//     connection.find().toArray().then(data => {
//         console.log(data);
//     })
// })

(async () => {
    const dbConnection = await mongoD();
    const data = await dbConnection.find().toArray();
    console.log(data);
})()
