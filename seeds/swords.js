
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('swords').del()
    .then(function () {
      // Inserts seed entries
      return knex('swords').insert([
        {id: 1, sword_name: 'shorty', catergory: 'Dagger', description: 'A knifes a knife ..', sword_image: ''},
        
      ]);
    });
};
