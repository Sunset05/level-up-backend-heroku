exports.up = function(knex) {
    return knex.schema.table('listing', t => {
        t.string('author').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.table('listing', t => {
        t.dropColumn('author')
    })
};
