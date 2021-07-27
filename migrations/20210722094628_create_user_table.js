
exports.up = function(knex) {
    return knex.schema.createTable('user', t => {
        t.increments();
        t.string('username').unique().notNullable();
        t.string('password_digest');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user');
};
