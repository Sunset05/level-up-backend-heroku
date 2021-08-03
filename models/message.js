const { Model } = require('objection');
const database = require('../db');
Model.knex(database);

class Message extends Model {
    static tableName = 'message';
    
    static get relationMappings() {
        const { User } = require('./user');
        return {
            receiver_info: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'user.id',
                    to: 'message.receiver'
                }
            },

            sender_info: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'user.id',
                    to: 'message.sender'
                }
            }
        }
    };
}

module.exports = { Message } ;