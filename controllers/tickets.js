const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
};


async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render('tickets/new', { title: "Add Ticket", flight});
}


async function create(req, res) {
    console.log('create')
    try { 
        req.body.flight=req.params.id
        const ticket = await Ticket.create(req.body)
        console.log('ticket', ticket)
        res.redirect(`/flights/${req.params.id}`);

    } catch (err) {
        console.log(err);
    }
}