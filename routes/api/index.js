const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// /api/user
router.use('/user', userRoutes);

// /api/thought
router.use('/thought', thoughtRoutes);

module.exports = router;
