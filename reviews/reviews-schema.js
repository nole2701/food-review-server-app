import mongoose from 'mongoose';
const schema = mongoose.Schema({
    userId: String,
    rating: Number,
    reviewText: String,
    date: Date,
    likes: Number,
    dislikes: Number,
}, {collection: 'reviews'});
export default schema;