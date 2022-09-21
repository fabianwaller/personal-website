import app from '../src/server/server.js'
import supertest from 'supertest'

describe('GET /api/articles', () => {
    it('should return 200 OK', (done) => {
        supertest(app).get('/api/articles').expect(200, done());
    });
});

describe('POST /api/contact', () => {
    it('should return 200 OK', (done) => {
        supertest(app).post('/api/contact').expect(200, done());
    });
});

describe('POST /api/newsletter/signup', () => {
    it('should return 200 OK', (done) => {
        supertest(app).post('/api/newsletter/signup').expect(200, done());
    });
});

describe('POST /api/newsletter/verify', () => {
    it('should return 200 OK', (done) => {
        supertest(app).post('/api/newsletter/verify').expect(200, done());
    });
});