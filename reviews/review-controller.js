import * as reviewDao from './review-dao.js';

export default (app) => {
    app.get('/api/reviews', findReviews);
    app.get('/api/reviews/:resid', findRestaurantReviews);
    app.post('/api/reviews', createReview);
    app.put('/api/reviews/:rid', updateReview);
    app.delete('/api/reviews/:rid', deleteReview);
}

const findReviews = async (req, res) => {
    const reviews = await reviewDao.findReviews();
    res.json(reviews);
}

const findRestaurantReviews = async (req, res) => {
    const restaurantId = req.params['resid'];
    const reviews = await reviewDao.findRestaurantReviews(restaurantId);
    res.json(reviews);
}

const createReview = async (req, res) => {
    const review = req.body;
    const status = await reviewDao.createReview(review);
    res.json(status);
}

const updateReview = async (req, res) => {
    const reviewId = req.params['rid'];
    const updates = req.body;
    const status = await reviewDao.updateReview(reviewId, updates);
    res.json(status);
}

const deleteReview = async (req, res) => {
    const reviewId = req.params['rid'];
    const status = await reviewDao.deleteReview(reviewId);
    res.json(status);
}