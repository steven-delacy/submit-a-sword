const connection = require('./connection')

function getPicture(db = connection) {
    return db('picture')
        .select()
}

function addPicture(picture ,db = connection) {
    return db('picture')
        .insert(picture)
}

function updatePicture(id, newPictureData, db = connection) {
    return db('picture')
        .where('id', id)
        .update(newPictureData)
  }

function deletePicture(id, db = connection) {
    return db('picture')
    .where('id', id)
        .del()
}

module.exports = {
    getPicture,
    addPicture,
    updatePicture,
    deletePicture
}