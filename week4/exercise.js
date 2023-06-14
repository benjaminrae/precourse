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

// 2. Create a class called ShoppingCart that has the following properties:
// - products
// - addProduct(product)
// - getTotal()
// - getProductById(productId)

/**
 * DO NOT CHANGE ANYTHING BELOW THIS LINE
 */
module.exports = {
  Product,
  ShoppingCart,
};
