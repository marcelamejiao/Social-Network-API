// Import express
const express = require('express');

// Import the database connection
const db = require('./config/connection');

// Import the routes
const routes = require('./routes');

// Get the listening PORT
const PORT = process.env.PORT || 3001;

// Initialise express
const app = express();

// Process POST and PUT data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load the routes into express
app.use(routes);

// When database is connected, start express
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });