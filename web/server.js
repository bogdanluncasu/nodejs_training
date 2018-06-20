const cors = require('cors')
const http = require('http')
const express = require('express')
const morgan = require('morgan')
const promisify = require('es6-promisify').promisify
const routes = require('./routes')
const utils = require('./utils')
const config = require('../config')
const logger = require('../models/logger')
const db = require('../models/db')

const app = express()
const server = http.createServer(app)

app.use(cors())
if (config.HTTP_LOG_FORMAT !== 'none') {
    app.use(morgan(config.HTTP_LOG_FORMAT))
}
app.use(express.json())
app.use('/api/v1', routes)
app.use(utils.errorHandler)

const listenPromise = promisify(server.listen.bind(server))
async function init() {
    await listenPromise(config.NPORT)
    logger.info(`Server is listening on ${config.NPORT}`)
}

const closePromise = promisify(server.close.bind(server))
async function close() {
    await closePromise()
    logger.info("Server was successfully closed")
}

module.exports = {
    init,
    close,
    server
}