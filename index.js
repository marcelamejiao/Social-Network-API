// Import express
const express = require('express');

// Import the database connection
const db = require('./config/connection');

// Get the listening PORT
const PORT = process.env.PORT || 3001;

// Initialise express
const app = express();

// When database is connected, start express
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });