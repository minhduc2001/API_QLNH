import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
    orderer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish'
    }],
    quantity: [{
        type: Number
    }],
    name: {
        type: String
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    note: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: false
    },
    timeDelivery: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

export default Order;