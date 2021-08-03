const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { authenticate } = require('./auth')
const { User }  = require('../models/user');

router.get('/users', authenticate, (_, response) => {
    User.query()
        .withGraphFetched('listings')
        .then(users => response.send(users));
});

router.get('/users/:id', authenticate, (request, response) => {
    User.query()
        .findById(request.params.id)
        .withGraphFetched('listings')
        .then(user => response.status(200).send(user))
})

router.get('/profile', authenticate, (request, response) => {
    const currentUser  = request.user
    User.query()
        .findById(currentUser.id)
        .withGraphFetched('[listings, sent_messages.[receiver_info], received_messages.[sender_info]]')
        .then(currentUserData => 
            response.status(200)
            .send({user: {
                id: currentUserData.id,
                username: currentUserData.username,
                listings: currentUserData.listings,
                sent_messages: currentUserData.sent_messages,
                received_messages: currentUserData.received_messages,
                }}
            )
        )
    
})

router.post('/users', (request, response) => {
    const { user } = request.body;
    User.query()
        .findOne({username: user.username})
        .then(result => {
            if (result) {
                response.send({errors: 'Username has been taken'})
            } else {
                const saltRounds = 12;
                bcrypt.hash(user.password, saltRounds)
                    .then(hashedPassword => {
                        User.query()
                            .insert({ username: user.username, password_digest: hashedPassword })
                            .then(newUser => response.status(201).json({id: newUser.id, username: newUser.username}))
                    })
            }
        })
});

router.post('/login', (request, response) => {
    const { user } = request.body;
    User.query()
        .findOne({ username: user.username || '' })
        .withGraphFetched('listings')
        .then(existingUser => {
            if (!existingUser) {
                response.status(401).send({ error: 'Invalid username or password' })
            } else {
                bcrypt.compare(user.password, existingUser.password_digest)
                    .then(isMatch => {
                        if (!isMatch) {
                            response.status(401).send({ error: 'Invalid username or password'})
                        } else {
                            const secret = process.env.AUTH_SECRET;
                            const payload = { user_id: existingUser.id };
                            const token = jwt.sign(payload, secret);
                            response.status(200).send({ 
                                token,
                                user: {
                                    id: existingUser.id, 
                                    username: existingUser.username, 
                                    listings: existingUser.listings 
                                }
                            });
                        }
                    })
            }
        })
})

module.exports = { usersRouter: router };