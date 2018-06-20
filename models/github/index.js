const axios = require('axios')

module.exports = axios.create({
  baseURL: process.env.GITHUB_API_URL,
  headers: {
    Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    Accept: 'application/vnd.github.v3+json',
    'User-Agent': 'Endava-Training'
  }
})
