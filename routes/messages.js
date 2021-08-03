const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth') 
const { Message } = require('../models/message');

router.post('/messages', authenticate, (request, response) => {
    const { message } = request.body
    console.log(message)
    Message.query()
        .insert({...message, sender: request.user.id})
        .returning('*')
        .then(createdMessage => response.status(201).send(createdMessage))
});
// const { listing } = request.body;
// const { user } = request
// Listing.query()
//     .insert({...listing, userId: user.id})
//     .then(newListing => response.status(201).send(newListing))

module.exports = { messagesRouter:router };