let products = [
  { id: 1, nome: "Elixir Magico", categoria: "Bebidas", preco: 10.90, estoque: 10 },
  { id: 2, nome: "Dacuéba", categoria: "Produtinhos", preco: 11.90, estoque: 20 }
]; 
let nextId = 3;

function addProduct(product) {
  product.id = nextId++;
  products.push(product);
  return product;
}

function getProducts() {
  return products;
}

function searchProducts({ nome, categoria, preco, estoque }) {
  return products.filter(product => 
    (nome ? product.nome.includes(nome) : true) &&
    (categoria ? product.categoria.includes(categoria) : true) &&
    (preco ? product.preco == preco : true) &&
    (estoque ? product.estoque == estoque : true)
  );
}

function updateProduct(id, updatedProduct) {
  const index = products.findIndex(product => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { id: parseInt(id), ...updatedProduct };
    return products[index];
  }
  return null;
}

function deleteProduct(id) {
  const index = products.findIndex(product => product.id === parseInt(id));
  if (index !== -1) {
    products.splice(index, 1);
    return true;
  }
  return false;
}

function validateProductData({ nome, categoria, preco, estoque }) {
  if (!nome) return "O campo 'nome' é obrigatório.";
  if (!categoria) return "O campo 'categoria' é obrigatório.";
  if (!preco) return "O campo 'preco' é obrigatório.";
  if (isNaN(parseFloat(preco))) return "O campo 'preco' deve ser um número válido.";
  if (!estoque) return "O campo 'estoque' é obrigatório.";
  if (isNaN(parseInt(estoque))) return "O campo 'estoque' deve ser um número válido.";
  return null;
}

module.exports = { 
  addProduct, 
  getProducts, 
  searchProducts, 
  updateProduct, 
  deleteProduct, 
  validateProductData 
};
