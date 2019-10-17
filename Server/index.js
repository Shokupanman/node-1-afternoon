let express = require('express')
let app = express()
let port = 3005
let products = require('../products.json')
let getProducts = require('./getProducts')

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct);

app.listen(port, () => {
console.log(`Reading server: ${port}`)
})
