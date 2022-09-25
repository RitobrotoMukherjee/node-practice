const connectDb = require('./mongodb');

const InsertObjectOne = {
    name: "Default", type: "Deafult", price: 0, quantity: 0
}

// Insert One
const insertOne = async () => {
    const connection = await connectDb();
    connection.insertOne( { ...InsertObjectOne, name: "S12", type: "mobile", price: 75000, quantity: 6});
    console.warn('Data Inserted');
}

// Insert Many
const InsertMany = async () => {
    const connection = await connectDb();
    connection.insertMany([
        { ...InsertObjectOne, name: "Item 1", type: "laptop", quantity: 9, price: 3000},
        { ...InsertObjectOne, name: "Item 2", type: "laptop", quantity: 9, price: 3000},
        { ...InsertObjectOne, name: "Item 3", type: "mobile", quantity: 9, price: 3000}
    ]);
    console.warn("Multiple data inserted")
}

// insertOne();
InsertMany();