const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the Users
  const users = [];

  // Loop 20 times -- add users to the users array
  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
    });
  }

  // Add users to the collection and await the results
  await User.collection.insertMany(users);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
