import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    name: String,
    address: String,
    image: String,
    ratings: [Number],
    avgRating: Number,
    numReviews: Number,
    cuisine: [String],
    description: String,
    openingHours: [String],
    description: String,
  },
  { collection: "restaurants" }
);
export default schema;
