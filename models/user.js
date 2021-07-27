const { Model } = require('objection');
const database = require('../db');

const { Listing } = require('./listing')

Model.knex(database);

class User extends Model {
    static tableName = 'user';

    static get relationMappings() {
        return{
            listings: {
                relation: Model.HasManyRelation,
                modelClass: Listing,
                join: {
                    from: 'user.id',
                    to: 'listing.userId'
                }
            }
        }
    }
}

module.exports = { User } ;