const express = require('express')
const router = express.Router();
const userAuth = require('./../middlewares/user.middleware');
const mapController = require('./../controllers/map.controller')
const {query} = require('express-validator');

router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    userAuth.isUserLoged, mapController.getCoordinates);

router.get('/get-distance-time',
    query('start').isString().isLength({min:3}),
    query('end').isString().isLength({min:3}),
    userAuth.isUserLoged, mapController.getDistanceTime);


router.get('/get-suggestion',
    query('address').isString().isLength({min:3}),
    userAuth.isUserLoged, mapController.getSuggestion);

module.exports = router;