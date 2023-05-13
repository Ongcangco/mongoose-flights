const Flight = require('../models/flight');

module.exports = {
    create,
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    flight.destination.push(req.body)
    try {
        //Save any changes made to flight 
        await flight.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`);
}