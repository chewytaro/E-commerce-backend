const { Product } = require('../models');

const productData = [
  {
    product_name: 'Safe Haven',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'History of Vouge: Special Edition',
    price: 90.0,
    stock: 25,
    category_id: 2,
  },
  {
    product_name: 'Intro to multiplication',
    price: 22.99,
    stock: 12,
    category_id: 3,
  },
  {
    product_name: 'Piano for Dummies',
    price: 12.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: 'Harry Potter',
    price: 29.99,
    stock: 22,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
