
exports.up = function(knex) {
    return knex.schema.createTable('message', t => {
        t.increments();
        t.integer('sender').references('user.id');
        t.integer('receiver').references('user.id');
        t.string('message_body');
        t.boolean('has_been_read');
        t.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('message');
};
