const express = require('express');
const multer = require('multer');
const upaloadConfig = require('./config/upload');


const SessionController = require('./controllers/SessionController');
const BookingController = require('./controllers/BookingController');

const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboradController')

const routes = express.Router();
const upload = multer(upaloadConfig)

routes.post('/sessions', SessionController.store);

routes.post('/spots',upload.single('thumbnail') , SpotController.store);
routes.get('/spots', SpotController.index);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);



module.exports = routes;