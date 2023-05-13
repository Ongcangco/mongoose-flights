const express = require('express');
const router = express.Router();

//Controller Module
const flightsCtrl = require('../controllers/flights')

//ALL ROUTES DEFAULTE TO /FLIGHTS
router.get('/', flightsCtrl.index);

//GET route for /flights/new
router.get('/new', flightsCtrl.new);

//GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

//POST route for /flights
router.post('/', flightsCtrl.create);

// //GET 



module.exports = router;
