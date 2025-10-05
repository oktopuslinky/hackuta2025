require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');
const mongoose = require('mongoose');

const User = require('./models/User');
 const elevenRoutes = require('./eleven');
const userRoutes = require('./routes/user');
 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
 
const app = express();
app.use(express.json());
const port = 3001;

// This is a middleware that enables CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Add a logger to see all incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// This is the middleware that will validate the access token
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
});


// This is a public endpoint that does not require authentication
app.get('/api/public', (req, res) => {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This is a protected endpoint that requires a valid access token

app.use('/api/eleven', elevenRoutes);
app.use('/api/user', userRoutes);
 
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});