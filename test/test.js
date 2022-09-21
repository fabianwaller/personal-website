import app from '../src/server/server.js'
import supertest from 'supertest'

describe('GET /api/articles', () => {
    it('should return 200 OK', (done) => {
        supertest(app).get('/api/articles').expect(200, done);
    });
});