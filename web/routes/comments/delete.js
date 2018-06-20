const joi = require('joi')
const commentsModel = require('../../../models/comments')

const paramsSchema = joi.object().keys({
  id: joi.string().required()
}).required()

module.exports = async function _delete(req, resp) {
  params = joi.attempt(req.params,paramsSchema)
  await commentsModel._delete(params.id)
  resp.send()
}
