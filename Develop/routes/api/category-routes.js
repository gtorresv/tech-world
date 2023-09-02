const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products (done!)
  const categoryData = await Category.findAll({
    include: [Product],
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products (done!)
  const categoryData = await Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  }).catch((err) => {
    res.json(err);
  });
  res.json(categoryData);
});

router.post('/', async (req, res) => {
  // create a new category (done!)
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
