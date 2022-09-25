const mongoD = require('./mongodb');

// mongoD().then((connection) => {
//     connection.find().toArray().then(data => {
//         console.log(data);
//     })
// })

// Read without params
(async () => {
    const dbConnection = await mongoD();
    const data = await dbConnection.find().toArray();
    console.log(data);
})();

// Read with params
// (async () => {
//     console.warn("---With Params---");
//     const connection = await mongoD();
//     connection.find({ name: /\d+$/i }).toArray()
//     .then(data => console.log(data));
// })();

// Read with matcher
// (async () => {
//     const dbConnection = await mongoD();
//     const data = await dbConnection.find(
//         {
//             $and: [ 
//                 { price: { $lte: 30000 } },
//                 { type: /mobile$/i }
//             ]
//         }
//     ).toArray();
//     console.log(data);
// })();

