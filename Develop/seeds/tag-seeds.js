const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Best Seller',
  },
  {
    tag_name: 'Recommended',
  },
  {
    tag_name: 'Employees Favorites',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
