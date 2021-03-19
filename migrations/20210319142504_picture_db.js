exports.up = function(knex) {
    return knex.schema.createTable('picture', table => {
        table.increments('id')
        table.string('picture_name')
        table.string('category')
        table.string('description', 200)
        table.blob('image')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('picture')
};
