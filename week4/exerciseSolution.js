/**
 * We are going to take the shopping cart and reimpliment it using classes
 */
const shoppingCart = [
  { id: 1, product: 'Shirt', price: 20, quantity: 2 },
  { id: 2, product: 'Pants', price: 30, quantity: 1 },
  { id: 3, product: 'Shoes', price: 50, quantity: 1 },
  { id: 4, product: 'Hat', price: 10, quantity: 3 },
  { id: 5, product: 'Socks', price: 5, quantity: 5 },
];

// 1. Create a class called Product that has the following properties:
// - id
// - product
// - price
// - quantity

class Product {
  id;
  product;
  price;
  quantity;

  constructor(id, product, price, quantity) {
    this.id = id;
    this.product = product;
    this.price = price;
    this.quantity = quantity;
  }
}

// 2. Create a class called ShoppingCart that has the following properties:
// - products
// - addProduct(product)
// - getTotal()
// - getProductById(productId)

class ShoppingCart {
  products;

  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
  }

  getTotal() {
    return this.products.reduce(
      (totalPrice, product) => totalPrice + product.price * product.quantity,
      0
    );
  }

  getProductById(productId) {
    return this.products.find((product) => product.id === productId);
  }
}

module.exports = {
  Product,
  ShoppingCart,
};
