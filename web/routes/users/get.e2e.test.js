const { expect } = require('chai')
const request = require('super-request')
const { server } = require('../../server')

describe('GET /api/v1/users', () => {
    it('should fetch users from github', async () => {
        const resp = await request(server)
            .get('/api/v1/users?q=endava')
            .json(true)
            .expect(200)
            .end()

        expect(resp.body).to.be.instanceOf(Array)
        expect(resp.body).to.have.length.above(0)
    })
})