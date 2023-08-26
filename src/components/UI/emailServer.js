require("dotenv").config();
const express = require("express");
const cors = require("cors");
const emailjs = require("emailjs-com");

const app = express();
app.use(cors({
    origin: "https://react-portfolio-1543f.web.app"
}));
app.use(express.json());

emailjs.init(process.env.EMAILJS_USER_ID);

app.post("/sendEmail", (req, res) => {
    const { fullName, email, subject, message } = req.body;

    const templateParams = {
        from_name: fullName,
        from_email: email,
        from_subject: subject,
        message: message,
    };

    emailjs
        .send(
            process.env.EMAILJS_SERVICE_ID,
            process.env.EMAILJS_TEMPLATE_ID,
            templateParams
        )
        .then(() => {
            console.log("Email sent successfully");
            res.status(200).send("Email sent successfully");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            res.status(500).send("An error occurred while sending the email");
        });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});