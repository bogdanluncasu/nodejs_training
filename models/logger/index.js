const winston = require('winston')

module.exports = winston.createLogger({
    level: process.env.LOG_LEVEL,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.simple())
        })
    ]
})