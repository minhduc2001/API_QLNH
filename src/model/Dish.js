import mongoose, { Schema } from 'mongoose';

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: "chua co anh nha huhu"
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
});

// đặt chỉ số cho dish
dishSchema.index({ name: 'text' });

const Dish = mongoose.model('Dish', dishSchema);

// khởi tạo chỉ số
Dish.createIndexes({ name: 'text' });

export default Dish;