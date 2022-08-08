import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD
    }
})

export const handleContact = (con) => async (req, res) => {

    //console.log(req.body);

    let sql = "INSERT INTO contact (name, email, subject, message) VALUES ('" + req.body.name + "' , '" + req.body.email + "', '" + req.body.subject + "', '" + req.body.message + "')"

    con.query(sql, (error, result) => {
        if (error) {
            throw err;
        }
        console.log('contact "' + req.body.subject + '" received');
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.MAILLIST,
        subject: `${req.body.subject}`,
        text: `${req.body.email}: ${req.body.message}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.json('email error')
        } else {
            console.log('email sent: ' + info.response);
            //res.send('success');
        }
    })


    return res.json('Message sent');
}

/* module.exports = {
    handleContact,
} */