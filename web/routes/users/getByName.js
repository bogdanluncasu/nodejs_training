const userModel = require('../../../models/users')

module.exports = async function getByName (req, resp) {
  let user = await userModel.getByName({ id: req.params.id })
  resp.send(user)
}
