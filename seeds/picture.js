
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('picture').del()
    .then(function () {
      // Inserts seed entries
      return knex('picture').insert([
        {id: 1, picture_title: 'sunset clouds', description: 'Image of clouds', image: 'https://3s81si1s5ygj3mzby34dq6qf-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/ab_multi-cloud-678x381.jpg'}
      ]);
    });
};
