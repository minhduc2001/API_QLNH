import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true
    }
});

const Category = mongoose.model('Category', categorySchema);

export default Category;