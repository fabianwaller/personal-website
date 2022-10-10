import server from '../src/server/server.js'
import request from 'supertest'
import { expect } from 'chai';

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
})