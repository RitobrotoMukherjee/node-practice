const mongoD = require('./mongodb');

(async () => {
    const dbConnection = await mongoD();
    const data = await dbConnection.find().toArray();
    console.log(data);
})()
