import * as restaurantDao from './restaurant-dao.js';

export default (app) => {
    app.get('/api/restaurants', findRestaurants);
    app.post('/api/restaurants', createRestaurant);
    app.put('/api/restaurants/:rid', updateRestaurant);
    app.delete('/api/restaurants/:rid', deleteRestaurant);
   }

