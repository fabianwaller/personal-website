import server from '../src/server/server.js'
import request from 'supertest'

describe('Articles', () => {
    test('POST /api/articles should return 401 Unauthorized', async () => {
        const res = await request(server).post('/api/articles')
        expect(res.status).toBe(401)
        expect(res.body).toBe('Unauthorized')
    })

    test('DELETE /api/articles should return 401 Unauthorized', async () => {
        const res = await request(server).delete('/api/articles')
        expect(res.status).toBe(401)
        expect(res.body).toBe('Unauthorized')
    })

    test('GET /api/articles should return 200 OK and be an array', async () => {
        const res = await request(server).get('/api/articles')
        expect(res.body).toBeInstanceOf(Array)
        expect(res.status).toBe(200)
    })

    const headers = {
        authorization: process.env.BEARER_TOKEN
    }

    let beforeLength;
    const randomTitle = Math.random().toString(36).substring(7)
    const newArticle = {
        title: randomTitle,
        description: 'this a a random article generated by articles.test.js',
        markdown: `This is article ${randomTitle}`,
    }

    test('POST /api/articles sould return 200 OK and create an article', async () => {
        const before = await request(server).get('/api/articles')
        expect(before.body).toBeInstanceOf(Array)
        beforeLength = before.body.length

        const res = await request(server).post('/api/articles').set(headers).send(newArticle)
        expect(res.body).toBe('created article ' + newArticle.title)
    })

    test('GET /api/articles should return 200 OK and be an array with one more article', async () => {
        const after = await request(server).get('/api/articles')
        const afterLength = after.body.length
        expect(afterLength).toBe(beforeLength + 1)
    })

    test('GET /api/articles should return 200 OK and be the new article', async () => {
        const res = await request(server).get('/api/articles')
        const newestArticle = res.body[0]
        expect(newestArticle).toHaveProperty('_id')
        expect(newestArticle).toHaveProperty('title')
        expect(newestArticle.title).toBe(newArticle.title)
        expect(newestArticle).toHaveProperty('slug')
        expect(newestArticle).toHaveProperty('createdAt')
        expect(newestArticle).toHaveProperty('editedAt')
        expect(newestArticle).toHaveProperty('description')
        expect(newestArticle).toHaveProperty('markdown')
        expect(newestArticle).toHaveProperty('html')
        expect(newestArticle.html).toBe(`<p>This is article ${newArticle.title}</p>`)
        expect(res.status).toBe(200)
    })

    test('DELETE /api/articles should return 200 OK and remove the newest article', async () => {
        const res = await request(server).delete('/api/articles').set(headers).send({'slug': newArticle.title})
        console.log(res.body)
        expect(res.body).toBe('deleted article ' + newArticle.title)
    })

})

