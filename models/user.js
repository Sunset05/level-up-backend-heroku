const { Model } = require('objection');
const database = require('../db');

const { Listing } = require('./listing')
const { Message } = require('./message')

Model.knex(database);

class User extends Model {
    static tableName = 'user';

    static get relationMappings() {
        return {
            listings: {
                relation: Model.HasManyRelation,
                modelClass: Listing,
                join: {
                    from: 'user.id',
                    to: 'listing.userId'
                }
            },

            sent_messages: {
                relation: Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: 'user.id',
                    to: 'message.sender'
                }
            },

            received_messages: {
                relation: Model.HasManyRelation,
                modelClass: Message,
                join: {
                    from: 'user.id',
                    to: 'message.receiver'
                }
            },

        }
    }
}

module.exports = { User } ;