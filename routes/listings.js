const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth') 
const { Listing } = require('../models/listing');


router.get('/listings', authenticate, (request, response) => {
    Listing.query()
        .then(listings => response.json(listings));
});

module.exports = { listingsRouter: router };