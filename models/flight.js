const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true,
    },
    arrival: { 
        type: Date,
        required: true,
    },
})


const flightSchema = new Schema ({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
       
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },

    
    flightNo: {
        type: Number,
        min: 10,
        max: 9999, 
        required: true,
    },
    
    depart: {
        type: Date,
            default: function() {
                return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
            }
        },
           
    destination: [destinationSchema]

});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);


// arrival: {
    //     type: Date,
    //     default: function() {
    //         return new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    //     },
    // },