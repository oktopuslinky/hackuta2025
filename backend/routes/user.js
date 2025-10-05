const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { name, email, auth0Id } = req.body;

    if (!name || !email || !auth0Id) {
      return res.status(400).json({ error: 'missing fields' });
    }

    const findUser = await User.findOne({ auth0Id });
    if (findUser) {
      return res.status(200).json({ message: 'user already exists' });
    }

    const newUser = new User({
      name,
      email,
      auth0Id,
    });
    console.log(newUser)

    await newUser.save();

    res.status(201).json({ message: 'user created.', userId: newUser.auth0Id });
  } catch (error) {
    console.error('user creating errror:', error);
    res.status(500).json({ error: 'user failed.' });
  }
});

module.exports = router;