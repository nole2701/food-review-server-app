import mongoose from 'mongoose';
const schema = mongoose.Schema({
    name: String,
    address: String,
    ratings: [Number],
    avgRating: Number,
    numReviews: Number,
    cuisine: [String],
    openingHours: [String],
}, {collection: 'restaurants'});
export default schema;