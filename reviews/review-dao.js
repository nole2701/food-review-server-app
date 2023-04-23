import reviewModel from './review-model.js';
export const findReviews = () => reviewModel.find();
export const findRestaurantReviews = (resId) => reviewModel.find({restaurantId: resId});
export const createReview = (review) => reviewModel.create(review);
export const updateReview = (reviewId, review) => reviewModel.updateOne({_id: reviewId}, {$set: review});
export const deleteReview = (reviewId) => reviewModel.deleteOne({_id: reviewId});