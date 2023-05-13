const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

//ALL routes start with '/' (root)
//POST /flights/:id/reviews
router.post('/flights/:id/destinations', destinationsCtrl.create)



module.exports = router;