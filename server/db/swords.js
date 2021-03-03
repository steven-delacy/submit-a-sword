const connection = require('./connection')

function getSwords(db = connection) {
    return db('swords')
        .select()
}

function addSwords(db = connection) {
    return db('swords')
        .select()
}

function updateScrap(id, newScrapData, db = connection) {
    return db('swords')
        .where('id', id)
        .update(newScrapData)
  }

function deleteSword(id, db = connection) {
    return db('swords')
    .where('id', id)
        .del
}

module.exports = {
    getSwords,
    addSwords,
    updateScrap,
    deleteSword
}