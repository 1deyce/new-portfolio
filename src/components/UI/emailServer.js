const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({
    origin: true
});
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    auth: {
        user: "keenandeyce@gmail.com",
        pass: process.env.APP_PASSWORD,
    },
});

// Define the Cloud Function
exports.sendEmail = functions.https.onRequest(async (req, res) => {
    cors(req, res, () => {
        const { fullName, email, subject, message } = req.body;

        const mailOptions = {
            from: email,
            to: "keenandeyce@gmail.com",
            subject: `Message from ${fullName}: ${subject}`,
            text: message,
        };

        try {
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error("Error sending email:", error);
                    res.status(500).send("An error occurred while sending the email");
                } else {
                    console.log("Email sent successfully");
                    res.status(200).send("Email sent successfully");
                }
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).send("An error occurred while sending the email");
        }
    });
});