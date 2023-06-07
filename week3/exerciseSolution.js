const shoppingCart = [
  { id: 1, product: 'Shirt', price: 20, quantity: 2 },
  { id: 2, product: 'Pants', price: 30, quantity: 1 },
  { id: 3, product: 'Shoes', price: 50, quantity: 1 },
  { id: 4, product: 'Hat', price: 10, quantity: 3 },
  { id: 5, product: 'Socks', price: 5, quantity: 5 },
];

// a. Create a new array called productList that contains only the product properties from each object in shoppingCart.

const productList = shoppingCart.map((product) => product.product);

// b. Create a new array called expensiveProducts that contains the products with a price greater than or equal to $30.

const expensiveProducts = shoppingCart.filter((product) => product.price >= 30);

// c. Find the object in shoppingCart with the id of 3 and store it in a variable called targetProduct.

const targetProduct = shoppingCart.find((product) => product.id === 3);

// d. Calculate the total price of all items in the shopping cart using reduce() and store the result in a variable called totalPrice.

const totalPrice = shoppingCart.reduce(
  (totalPrice, product) => totalPrice + product.price * product.quantity,
  0
);

/** 
DO NOT CHANGE ANYTHING BELOW THIS LINE
*/

module.exports = {
  productList,
  expensiveProducts,
  totalPrice,
  targetProduct,
};
