const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

//  get all
router.get('/', async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//  get one
router.get('/:id', getUsers, (req, res) => {
  res.json(res.user);
});

//create a new
router.post('/', async (req, res) => {
  const users = new userModel({
    name: req.body.name,
    address: req.body.address,
  });
  try {
    const newUsers = await users.save();
    res.status(201).json(newUsers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//  update one
router.patch('/:id', getUsers, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.address != null) {
    res.user.address = req.body.address;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
//  delete one
router.delete('/:id', getUsers, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: 'delete user ' });
  } catch (err) {
    res.json({ message: err.message });
  }
});

async function getUsers(req, res, next) {
  let user;
  try {
    user = await userModel.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find users' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.user = user;
  next();
}

module.exports = router;
