require('dotenv').config()
const web = require('./web')

web.init()

process.on('SIGTERM', () => web.close())

// helmet github