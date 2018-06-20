const joi = require('joi')
const commentsModel = require('../../../models/comments')

const paramsSchema = joi.object().keys({
  userName: joi.string().min(1).required()
}).required()

module.exports = async function get(req, resp) {
  const params = joi.attempt(req.params, paramsSchema)
  let comments = await commentsModel.getForUsername(params.userName)

  resp.send(comments)
}
