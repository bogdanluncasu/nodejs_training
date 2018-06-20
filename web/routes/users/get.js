const joi = require('joi')
const userModel = require('../../../models/users')

const querySchema = joi.object().keys({
  q: joi.string().required()
})

module.exports = async (req, resp) => {
  const query = joi.attempt(req.query, querySchema)
  let users = await userModel.get(req.query)
  resp.send(users)
}
