const joi = require('joi')
const commentsModel = require('../../../models/comments')

const bodySchema = joi.object().keys({
  user: joi.string().min(1).required(),
  text: joi.string().required()
}).required()

module.exports = async function create(req, resp) {
  const body = joi.attempt(req.body, bodySchema)
  comment = await commentsModel.create(body)
  resp.send(comment)
}
