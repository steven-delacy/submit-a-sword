const connection = require('./connection')

function getSwords(db = connection) {
    return db('swords')
        .select()
}

function addSwords(swords ,db = connection) {
    return db('swords')
        .insert(swords)
}

function updateSword(id, newSwordData, db = connection) {
    return db('swords')
        .where('id', id)
        .update(newSwordData)
  }

function deleteSword(id, db = connection) {
    return db('swords')
    .where('id', id)
        .del()
}

module.exports = {
    getSwords,
    addSwords,
    updateSword,
    deleteSword
}