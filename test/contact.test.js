import handleContact from '../pages/api/contact.js'

describe('handle contact', () => {
    test('should return 200 OK', async () => {
        const req = {
            body: {
                name: "Automated Tester",
                email: "mail@fabianwaller.de",
                message: "Automated Test Message"
            }
        }
        const res = {
            status: (code) => {
                expect(code).toBe(200)
                return {
                    json: (data) => {
                        expect(data).toBe('Your message has been sent.')
                    }
                }
            }
        }
        await handleContact(req, res)
    })
})