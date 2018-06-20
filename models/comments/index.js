const db = require('./../db')
const ObjectId = require('mongodb').ObjectId
const collectionName = 'comments'
async function getForUsername(userName) {
    return db.collection(collectionName).find({ user: userName }).toArray()
}

async function create(comment) {
    await db.collection(collectionName).insertOne(comment)
    return comment
}

async function _delete(commentId) {
    await db.collection(collectionName).deleteOne({ _id: new ObjectId(commentId) })
}

module.exports = {
    getForUsername,
    create,
    _delete
}