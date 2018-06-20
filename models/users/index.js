const github = require('./../github')

async function get (query) {
  const resp = await github.get('/search/users', { params: query })
  return resp.data.items
}

async function getByName (query) {
  const resp = await github.get(`/users/${query.id}`)
  return resp.data
}

module.exports = {
  get,
  getByName
}
