import server from '../src/server/server.js'
import request from 'supertest'
import { expect } from 'chai';


/*
describe('GET /api/newsletter/signup without email', () => {
    it('should return 400 Bad Request', async () => {
        const res = await request(server).post('/api/newsletter/signup')
        expect(res.status).to.equal(400)
    })
})

describe('GET /api/newsletter/signup', () => {
    let verificationCode;
    it('should return 200 OK and a number', async () => {
        const data = { email: 'test123@gmx.de', debug: true }
        const res = await request(server).post('/api/newsletter/signup').send(data)
        verificationCode = res.body;
        //expect(verificationCode).to.be.a('number')
        expect(res.status).to.equal(200)
    })
    /*     it('should return 200 OK and a string', async () => {
            const res = await request(server).post('/api/newsletter/verify').send({ code: verificationCode })
            console.log(res.body)
            expect(res.body).to.be.a('string')
            expect(res.status).to.equal(200)
        }) 
})

describe('GET /api/newsletter/verify', () => {
    it('should return 400 code is undefined', async () => {
        const res = await request(server).post('/api/newsletter/verify')
        expect(res.status).to.equal(400)
    })
})
*/

describe('GET /api/*', () => {
    it('should return 404', async () => {
        const res = await request(server).get('/api/dnfjvknasdd')
        expect(res.status).to.equal(404)
    })
})
/*
    describe('POST /api/contact without data', () => {
    it('should return 400 Bad Request', async () => {
        const res = await request(server).post('/api/contact')
        expect(res.status).to.equal(400)
    })
})

describe('POST /api/contact with data', () => {
    it('should return 200 OK', async () => {
        const data = { name: 'Tester', email: "test@supertest.de", message: "Test Message" }
        const res = await request(server).post('/api/contact').send(data);
        expect(res.status).to.equal(200)
    })
})*/