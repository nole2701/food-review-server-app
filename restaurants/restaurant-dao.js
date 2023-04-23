import restaurantModel from "./restaurant-model";
export const findRestaurants = () => restaurantModel.find();
export const createRestaurant = (restaurant) => restaurantModel.create(restaurant);
export const updateRestaurant = (resId, restaurant) => restaurantModel.updateOne({_id: resId}, {$set: restaurant})
export const deleteRestaurant = (resId) => restaurantModel.deleteOne({_id: resId});