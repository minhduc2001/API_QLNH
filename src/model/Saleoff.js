import mongoose, { Schema } from 'mongoose';

const saleoffSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: 'Chua design duoc huhu :<'
    },
    contents: [{
        type: String
    }],
    tỉmeStart: {
        type: Date,
        required: true
    },
    timeEnd: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const SaleOff = mongoose.model('Saleoff', saleoffSchema);

export default SaleOff;