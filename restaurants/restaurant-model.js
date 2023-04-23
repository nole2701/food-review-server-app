import mongoose from 'mongoose';
import restaurantSchema from './restaurant-schema.js'
const restaurantModel = mongoose
              .model('RestaurantModel', restaurantSchema);
export default restaurantModel;