const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

async function index(req, res) {
    res.render('flights/index', {
        flights: await Flight.find({})
    })
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('flights/show', { title: 'Flight Detail', flight });
  }

// 
function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}


async function create(req, res) {
    for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
      res.render('flights/new', { errorMsg: err.message } );

  }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({flight: flight._id});
    res.render('flights/show', { title: 'Flight Details', flight, tickets });
}




