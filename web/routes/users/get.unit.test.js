const { expect } = require('chai')
const sinon = require('sinon')
const get = require('./get')
const userModel = require('../../../models/users')

describe('GET users', () => {
    let sandbox

    beforeEach(() => sandbox = sinon.createSandbox())
    afterEach(() => sandbox.restore())

    it('should fetch the users from usersModel',async () => {
        const req = { query: { q: 'endava' } }
        const resp = { send: sandbox.spy() }
        const usersModelStub = sandbox.stub(userModel, 'get').resolves([])

        const result = await get(req, resp)
        
        expect(usersModelStub).to.be.calledOnce
        expect(usersModelStub).to.be.calledWith(req.query)
        expect(resp.send).to.be.calledOnce
        expect(resp.send).to.be.calledWith([])
    })
})