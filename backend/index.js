require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error', err));
 
 const elevenRoutes = require('./eleven');
 
const app = express();
app.use(express.json());
const port = 3001;

// This is a middleware that enables CORS (Cross-Origin Resource Sharing)
app.use(cors());

// This is the middleware that will validate the access token
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});

// Middleware to find or create a user
const findOrCreateUser = async (req, res, next) => {
  try {
    const auth0Id = req.auth.payload.sub;
    // Note: To get user profile information like email, name, and picture,
    // ensure you have requested the 'openid profile email' scopes
    // when authenticating the user in your frontend application.
    const email = req.auth.payload.email;
    const name = req.auth.payload.name;
    const picture = req.auth.payload.picture;

    let user = await User.findOne({ auth0Id });

    if (!user) {
      // Make sure to handle cases where email might not be present
      if (!email) {
        return res.status(400).json({ message: 'Email is required to sign up.' });
      }
      user = new User({
        auth0Id,
        email,
        name,
        picture,
      });
      await user.save();
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Error in findOrCreateUser middleware:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// This is a public endpoint that does not require authentication
app.get('/api/public', (req, res) => {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This is a protected endpoint that requires a valid access token
app.get('/api/private', checkJwt, findOrCreateUser, (req, res) => {
  res.json({
    message: `Hello from a private endpoint! You are authenticated as ${req.user.email}.`
  });
});

app.use('/api/eleven', elevenRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});