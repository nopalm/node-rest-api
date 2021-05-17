const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel');

//get all products
router.get('/', async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// add new product
router.post('/', async (req, res) => {
  const products = new productModel({
    productName: req.body.productName,
    productDescription: req.body.productDescription,
  });
  try {
    const newProduct = await products.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  get one product
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

//  update one product
router.patch('/:id', getProduct, async (req, res) => {
  if (req.body.productName != null) {
    res.product.productName = req.body.productName;
  }
  if (req.body.productDescription != null) {
    res.product.productDescription = req.body.productDescription;
  }
  try {
    const updatedProduct = await res.product.save();
    res.json(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete one product
router.delete('/:id', getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: 'delete user ' });
  } catch (err) {
    res.json({ message: err.message });
  }
});

//midleware
async function getProduct(req, res, next) {
  let product;
  try {
    product = await productModel.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;
  next();
}

module.exports = router;
