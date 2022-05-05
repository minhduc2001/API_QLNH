import mongoose, { Schema } from 'mongoose';

const TokenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String,
        unique: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Token', TokenSchema);