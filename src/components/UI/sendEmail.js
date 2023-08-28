const express = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

const app = express();
app.use(express.json());

app.post('/sendEmail', (req, res) => {
    const { subject, message } = req.body;

    const msg = {
        to: 'keenandeyce@gmail.com',
        from: 'keenandeyce@gmail.com',
        subject,
        text: message,
        html: `<strong>${message}</strong>`,
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

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});