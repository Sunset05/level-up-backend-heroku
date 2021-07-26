const { table } = require("../db");

exports.up = function(knex) {
    return knex.schema.table('listing', t => {
        t.string('image_url')
    } )
};

exports.down = function(knex) {
    return knex.schema.table('listing', t => {
        t.dropColumn('image_url')
    })
};
