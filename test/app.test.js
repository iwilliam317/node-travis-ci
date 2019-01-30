const chai = require('chai')

const chaiHttp = require('chai-http')

chai.use(chaiHttp)

const expect = chai.expect

const app = require('../src/app')

describe('#GET /', () => {
    it('expects to return Testing Travis-CI - Deployed at AWS', () => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.body.message).to.equal('Testing Travis-CI - Deployed at AWS')
                expect(res.ok).to.be.true
                expect(res.status).to.equal(200)
            })
    })
})