exports.up = function(knex) {
    return knex.schema.table('listing', t => {
        t.integer('userId').unsigned().notNullable().references('id').inTable('user')
    } )
};

exports.down = function(knex) {
    return knex.schema.table('listing', t => {
        t.dropColumn('userId')
    })
};
