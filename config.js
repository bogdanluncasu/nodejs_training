const joi = require('joi')

const envSchema = joi.object().keys({
    NPORT: joi.number().min(0).max(65535).required(),
    GITHUB_API_URL: joi.string().uri({ scheme: 'https' }).required(),
    GITHUB_API_TOKEN: joi.string().length(40).alphanum().required(),
    LOG_LEVEL: joi.string().valid('none', 'silly', 'debug', 'verbose', 'info', 'warning', 'error').required(),
    HTTP_LOG_FORMAT: joi.string().valid('none', 'dev', 'combined', 'short', 'tiny').required(),
    DB_URI: joi.string().uri({scheme:'mongodb'}).required(),
    DB_NAME: joi.string().required()
}).unknown().required()


module.exports = joi.attempt(process.env, envSchema)