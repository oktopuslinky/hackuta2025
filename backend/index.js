require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { auth } = require('express-oauth2-jwt-bearer');

const app = express();
const port = 3001;

// This is a middleware that enables CORS (Cross-Origin Resource Sharing)
app.use(cors());

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
app.get('/api/private', checkJwt, (req, res) => {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});