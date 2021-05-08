const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// all tag routes work!

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    Tag.findAll(
      {
        include: {
          model: Product
        }
      }
    )
    .then(tagData => res.json(tagData))
  }
    catch(err) {
      res.status(500).json(err);
    }
  });

// works
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
    }
  })
  .then(tagData => res.json (tagData))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(tagData => res.json(tagData))
  .catch(err => {
    res.status(500).json(err);
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with requested id' });
      return;
    }
    res.json(tagData);
  })
  .catch(err => {
    req.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => res.json(categoryData))
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

module.exports = router;
