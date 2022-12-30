import server from '../src/server/server.js'
import request from 'supertest'
import { expect } from 'chai';

describe('GET /api/articles', () => {
    it('should return 200 OK and be an array', async () => {
        const res = await request(server).get('/api/articles')
        expect(res.status).to.equal(200)
    })
})

describe('POST /api/articles', () => {
    it('sould return 200 OK and created an article', async () => {
        const headers = {
            authorization: process.env.BEARER_TOKEN
        }
        const article = {
            title: 'title',
            description: 'description',
            markdown: '# title',
        }
        const res = await request(server).post('/api/articles').send(headers).send(article)
        console.log(res.body)
    })
})

