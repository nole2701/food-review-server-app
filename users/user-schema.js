import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
 {
   username: { type: String, unique: true, required: true },
   password: { type: String, required: true },
   firstName: String,
   lastName: String,
   createdAt: { type: Date, default: Date.now },
   isRestaurantOwner: { type: Boolean, default: false },
   about: String,
 },
 { collection: "users" }
);
export default userSchema;