import app from '../src/server/server.js'
import request from 'supertest'
import { expect } from 'chai';

describe('GET /api/articles', () => {
    it('should return 200 OK and be an array', async () => {
        const res = await request(app).get('/api/articles')
        expect(res.status).to.equal(200)
    });

});