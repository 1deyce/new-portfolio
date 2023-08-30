require("dotenv").config();
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.EMAIL_API);

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();

let docRef = db.collection("messages");
docRef.onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
            let data = change.doc.data();

            const msg = {
                to: 'keenandeyce@gmail.com',
                from: 'keenandeyce@gmail.com',
                subject: data['subject'],
                text: `Message from ${data['fullName']} (${data['email']}): ${data['message']}`,
                html: `<strong>Message from ${data['fullName']} (${data['email']}):</strong> ${data['message']}`,
            };

            sgMail
                .send(msg)
                .then(() => {
                    console.log('Email sent!')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    });
}, err => {
    console.log(`Encountered error: ${err}`);
}); 