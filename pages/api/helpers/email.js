import nodemailer from 'nodemailer';

const sendMail = async (mailOptions) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    await new Promise((resolve, reject) => {
        // verify connection configuration
        transporter.verify(function (error, success) {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                console.log("Server is ready to take our messages")
                resolve(success)
            }
        })
    })

    await new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                console.log('email ' + info.messageId + ' sent');
                resolve(info)
            }
        })
    })
}

export default sendMail