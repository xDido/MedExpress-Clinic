const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Please enter a first name']
    },
    Price: {
        type: String,
        required: [true, 'Please enter a last name']
    },
    SessionDiscount: {
        type: String,
        required: [true, 'Please enter a username']
    },
    MedicineDiscount: {
        type: String,
        required: [true, 'Please enter a password']
    },
    FamilyDiscount: {
        type: String,
        required: [true, 'Please enter an email']
    },
}, {timestamps: true});

const Package = mongoose.model('Package', packageSchema, 'Package');
module.exports = Package;