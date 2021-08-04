const express = require('express');
const router = express.Router();
const { authenticate } = require('./auth') 
const { Message } = require('../models/message');


router.post('/messages', authenticate, (request, response) => {
    const { message } = request.body
    Message.query()
        .insert({...message, sender: request.user.id})
        .returning('*')
        .then(createdMessage => response.status(201).send(createdMessage))
});

module.exports = { messagesRouter:router };