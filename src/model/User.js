import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        default: ''
    },
    role: {
        /**
         * admin: 4
         * chef: 3
         * receptionist: 2 (le tan)
         * client: 1
         */
        type: String,
        default: 'client'
    },
    address: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        required: true,
        // unique: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    isLock: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// đặt chỉ số cho user
userSchema.index({ username: 'text' });

const User = mongoose.model('User', userSchema);

// khởi tạo chỉ số
User.createIndexes({ username: 'text' });

export default User;