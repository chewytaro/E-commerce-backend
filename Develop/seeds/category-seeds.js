const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Romance Books',
  },
  {
    category_name: 'Fashion Books',
  },
  {
    category_name: 'Education Books',
  },
  {
    category_name: 'Music Books',
  },
  {
    category_name: 'Sci-Fi Books',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
