const express = require('express');
const app = express();

const createProductRoute = require('./routes/createProduct');
const getProductsRoute = require('./routes/getProducts');
const updateProductRoute = require('./routes/updateProduct');
const deleteProductRoute = require('./routes/deleteProduct');
const searchProductsRoute = require('./routes/searchProducts');

app.use(express.json()); 

app.use('/', createProductRoute);
app.use('/', getProductsRoute);
app.use('/', updateProductRoute);
app.use('/', deleteProductRoute);
app.use('/', searchProductsRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
