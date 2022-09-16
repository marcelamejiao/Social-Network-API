const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// /api/users
router.use('/users', userRoutes);

// /api/thoughts
router.use('/thoughts', thoughtRoutes);

module.exports = router;
