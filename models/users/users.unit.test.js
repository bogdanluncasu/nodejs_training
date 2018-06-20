const { expect } = require('chai')
const nock = require('nock')
const userModel = require('../users')

describe('userModel', () => {
    const githubApi = nock('https://api.github.com', {
        reqheaders: {
            accept: 'application/vnd.github.v3+json',
            'user-agent': 'Endava-Training'
        }
    })

    describe('userModel.get', () => {
        it('should fetch users from github', async () => {
            const getUsersFromApi = githubApi
                .get('/search/users?q=endava')
                .reply(200, { items: [] })

            const result = await userModel.get({ q: 'endava' })
            expect(getUsersFromApi.isDone()).to.be.true
            expect(result).to.eql([])
        })
    })
})