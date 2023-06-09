const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try{
    const tagData = await Tag.findAll({
      include: Product
    });
    res.status(200).json(tagData)
  }catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  try{
    const tagData = await Tag.findByPk(req.params.id, {
      include: Product,
    });
    if(!tagData){
      res.status(404).json({ message: 'No tag found with this id'});
    }
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  try {
    const tagData = await Tag.create({tag_name: req.body.tag_name});
    res.status(200).json(tagData);
  } catch (err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
        id: req.params.id
    }
})
    .then(TagData => {
        if (!TagData[0]) {
            res.status(404).json({ message: 'No tag found with this id' });
            return;
        }
        res.json(TagData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', async(req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!tagData){
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  }catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;