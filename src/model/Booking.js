import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema({
    booker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    dishes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dish',
        default: []
    }],
    numberOfPeople: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    phone: {
        type: String
    },
    arrivalDay: {
        type: Date,
        required: true
    },
    description: {
        type: String,
    },
    table: {
        type: Schema.Types.ObjectId,
        ref: 'Table'
    },
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;