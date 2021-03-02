
exports.up = function(knex) {
    return knex.schema.createTable('swords', table => {
        table.increments('id')
        table.string('sword_name')
        table.string('category')
        table.string('description')
        table.blob('sword_image')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('swords')
};
