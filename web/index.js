const server = require('./server')
const db = require('../models/db')

async function init(){
    await db.init()
    await server.init()
}

async function close(){
    await server.close()
    await db.close()
}

module.exports = {
    init,
    close
}