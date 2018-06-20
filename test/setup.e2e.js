require('dotenv').config({ path: '.env.test' })
const chai = require('chai')
const sinonChai = require('sinon-chai')
const web = require('../web')


chai.use(sinonChai)

before(() => web.init())
after(() => web.close())