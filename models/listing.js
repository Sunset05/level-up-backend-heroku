const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Listing extends Model {
    static tableName = 'listing'
};

module.exports = { Listing } ;