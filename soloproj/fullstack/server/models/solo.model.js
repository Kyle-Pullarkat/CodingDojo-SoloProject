const mongoose = require("mongoose");

const SoloSchema = new mongoose.Schema({
    
        flavor: {
            type: String,
        },

        wings: {
            type: Number,
        },

        drink: {
            type: String,
        },

    },
    { 
        timestamps: true, 
    },
);

const Solo = mongoose.model('solo', SoloSchema);
module.exports = Solo;

