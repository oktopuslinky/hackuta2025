const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/', async (req, res) => {
  try {
    const { fName, lName, email, password } = req.body;

    if (!fName || !lName || !email || !password) {
      return res.status(400).json({ error: 'missing fields' });
    }

    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).json({ error: 'email alr used.' });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fName,
      lName,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(201).json({ message: 'user created.', userId: newUser.uid });
  } catch (error) {
    console.error('user creating errror:', error);
    res.status(500).json({ error: 'user failed.' });
  }
});

module.exports = router;