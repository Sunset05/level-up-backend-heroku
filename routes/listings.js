const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth') 
const { Listing } = require('../models/listing');


router.get('/listings', authenticate, (request, response) => {
    Listing.query()
        .then(listings => response.json(listings));
});

router.post('/listings', authenticate, (request, response) => {
    const { listing } = request.body;
    const { user } = request
    Listing.query()
        .insert({...listing, userId: user.id})
        .then(newListing => response.status(201).send(newListing))
});

module.exports = { listingsRouter: router };