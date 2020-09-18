const mongoose = require('mongoose');


const leaderSchema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    designation: {
        type: String
    },
    abbr: {
        type: String
    },
    description: {
        type: String
    },
    featured: {
        type: Boolean,
        default: false
    },
});

module.exports =mongoose.model('Leader', leaderSchema);