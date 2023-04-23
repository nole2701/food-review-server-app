import * as restaurantDao from './restaurant-dao.js';

export default (app) => {
    app.get('/api/restaurants', findRestaurants);
    app.post('/api/restaurants', createRestaurant);
    app.put('/api/restaurants/:rid', updateRestaurant);
    app.delete('/api/restaurants/:rid', deleteRestaurant);

    const findRestaurants = async (req, res) => {
        const restaurants = await restaurantDao.findRestaurants();
        res.json(restaurants);
    }

    const createRestaurant = async (req, res) => {
        const restaurant = req.body;
        const status = await restaurantDao.createRestaurant(restaurant);
        res.json(status);
    }

    const updateRestaurant = async (req, res) => {
        const restaurantId = req.params['rid'];
        const updates = req.body;
        const status = await restaurantDao.updateRestaurant(restaurantId, updates);
        res.json(status);
    }

    const deleteRestaurant = async (req, res) => {
        const restaurantId = req.params['rid'];
        const status = await restaurantDao.deleteRestaurant(restaurantId);
        res.json(status);
    }
   }

