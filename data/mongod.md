## Create DB

- `use e-comm`
- `db.createCollection('products')`

## Insert Data

```
db.products.insertMany([
    {
        name: "A53",
        type: "mobile",
        price: 24000,
        qunatity: 32
    },
    {
        name: "A72",
        type: "mobile",
        price: 32000,
        qunatity: 27
    },
    {
        name: "i-phone 14",
        type: "mobile",
        price: 132000,
        qunatity: 9
    },
    {
        name: "MacBook Pro",
        type: "laptop",
        price: 90000,
        qunatity: 12
    }
])
```