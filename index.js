const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors')

// const knex = require('knex');
// const configuration = knex('./knexfile').development
// const database = knex(configuration)
const database = require('./db');
console.log(database)

app.use(cors())

app.get('/listings', (_, response) => {
    database('listing')
        .then(listings => response.status(200).send(listings))
        
})

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))