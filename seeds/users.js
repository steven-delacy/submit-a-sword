const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries


      return Promise.all(
        [
          {
            id: 1,
            username: 'admin',
            password: 'vF5hQv5UWQErGp8z',
          },
          {
            id: 2,
            username: 'Stoven',
            password: 'Norhed1',
          }
        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
