const MongoClient = require('mongodb').MongoClient
const config = require('../../config.js')
const logger = require('../logger')

let client

async function init() {
    client = await MongoClient.connect(config.DB_URI)
    logger.info('Db successfully initialized')
}

async function close() {
    await client.close()
    logger.info("Db successfully closed")
}

function collection(collectionName){
    return client.db(config.DB_NAME).collection(collectionName)
}

module.exports = {
    init, 
    close,
    collection
}