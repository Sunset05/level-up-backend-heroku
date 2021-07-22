const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');

const database = require('./db');

const { Model } = require('objection');
const { request } = require('express');
Model.knex(database);

app.use(cors());
app.use(express.json());

class Listing extends Model {
    static tableName = 'listing'
};

app.get('/listings', index);
app.get('/listings/:id', show)
app.post('/listings', create)

function index(_,response){
    Listing.query()
        .then(listings => response.status(200).send(listings))
};

function show(request, response){
    Listing.query()
        .where('id', request.params.id)
        .then(listings => response.status(200).send(listings[0]))
};

function create(request, response){
    const { listing } = request.body
    Listing.query()
        .insert(listing)
        .returning('*')
        .then(listing => response.status(201).send(listing))
}


app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));