const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    vehicleOwner : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    brandName: {
        type: String,
        required: true,
    },
    vehicle_no: {
        type: String,
        required: true
    },
    license_no: { 
        type: String,
        required: true
    }, 
    verified: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);