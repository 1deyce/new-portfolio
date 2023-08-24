const nodemailer = require("nodemailer");
const cors = require("cors");
const express = require("express");
require('dotenv').config();

const app = express();

app.use(cors()); // to enable CORS
app.use(express.json()); // to parse JSON

app.post("/send", (req, res) => {
    const { fullName, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "587", // must be 587 for gmail
        auth: {
            user: "keenandeyce@gmail.com",
            pass: process.env.APP_PASSWORD, // accessing env variable
        },
    });

    const mailOptions = {
        from: email,
        to: "keenandeyce@gmail.com",
        subject: `Message from ${fullName}: ${subject}`,
        text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("An error occurred while sending.");  
        } else {
            console.log("Email sent: " + info.response);
            res.status(200).send("Email sent successfully");
        }
    });
});
