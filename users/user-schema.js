import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
 {
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   firstName: String,
   lastName: String,
   dob: Date,
   createdAt: { type: Date, default: Date.now },
   isRestaurantOwner: { type: Boolean, default: false },
 },
 { collection: "users" }
);
export default userSchema;