require("dotenv").config();
const express = require('express');
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.EMAIL_API);

const app = express();
app.use(express.json());
app.use(cors());

app.post('/sendEmail', (req, res) => {
    const { subject, message, email, fullName } = req.body;

    const msg = {
        to: 'keenandeyce@gmail.com',
        from: 'keenandeyce@gmail.com',
        subject,
        text: `Message from ${fullName} (${email}): ${message}`,
        html: `<strong>Message from ${fullName} (${email}):</strong> ${message}`,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent!');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});