import handleNewsletterSignup from "../pages/api/newsletter/signup"

describe('handle newsletter signup', () => {
    test('should return 200 OK', async () => {
        const req = {
            headers: {
                host: "localhost:3000"
            },
            body: {
                email: "djfvkfsdn"
            }
        }
        const res = {
            status: (code) => {
                expect(code).toBe(400)
                return {
                    json: (data) => {
                        expect(data).toBe('invalid email address')
                    }
                }
            }
        }
        await handleNewsletterSignup(req, res)
    })
})

describe('handle newsletter signup', () => {
    test('should return 200 OK', async () => {
        const req = {
            headers: {
                host: "localhost:3000"
            },
            body: {
                email: "dollar_akkorde_0s@icloud.com"
            }
        }
        const res = {
            status: (code) => {
                expect(code).toBe(200)
                return {
                    json: (data) => {
                        expect(data).toBe('Please check your inbox to verify your email.')
                    }
                }
            }
        }
        await handleNewsletterSignup(req, res)
    })
})