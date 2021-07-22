
exports.up = function(knex) {
    return knex.schema.createTable('listing', t => {
        t.increments()
        t.string('item')
        t.integer('price')
        t.string('description')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('listing')
};