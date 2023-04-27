import restaurantModel from "./restaurant-model.js";
export const findRestaurants = () => restaurantModel.find();
export const findRestaurantById = (resId) =>
  restaurantModel.findOne({ _id: resId });
export const findRestaurantByName = (resName) =>
  restaurantModel.find({ name: resName });
export const createRestaurant = (restaurant) =>
  restaurantModel.create(restaurant);
export const updateRestaurant = (resId, restaurant) =>
  restaurantModel.updateOne({ _id: resId }, { $set: restaurant });
export const deleteRestaurant = (resId) =>
  restaurantModel.deleteOne({ _id: resId });
