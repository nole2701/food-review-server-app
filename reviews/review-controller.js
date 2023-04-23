import * as reviewDao from './review-dao.js';

export default (app) => {
    app.get('/api/review', findReviews);
    app.post('/api/review', createReview);
    app.put('/api/review/:rid', updateReview);
    app.delete('/api/review/:rid', deleteReview);
}