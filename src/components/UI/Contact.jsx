import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../../firebaseConfig";
const Contact = () => {
  // Initialize Firebase app
  const app = firebase.initializeApp(firebaseConfig);

  // Initialize Firestore
  const firestore = firebase.firestore(app);

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    firestore
      .collection("messages")
      .add({
        ...formState,
      })
      .then(() => {
        console.log("Message added to Firestore");
        setFormState({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("Error adding message to Firestore: ", error);
      });
  };
  return (
    <section id="contact" className="bg-white dark:bg-black pt-16 pb-20">
      <div className="container">
        <h2 className="text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-8 text-center">
          <span className="border-b-2 border-solid border-secondaryColor dark:border-white">
            Get in touch
          </span>
        </h2>
        <p className="text-secondaryColor dark:text-white mb-10 pt-5 text-center font-[500] text-[18px]">
          <span className="text-primaryColor font-[800]">E-Mail: </span>
          keenandeyce@gmail.com <br />
          <br />
          <span className="text-primaryColor font-[800]">Whatsapp: </span>
          +27 66 216 1232 <br />
          <br />
          <span className="text-primaryColor font-[800]">LinkedIn: </span>
          <a
            className="hover:cursor-pointer hover:underline hover:text-primaryColor"
            href="https://www.linkedin.com/in/keenan-deyce-5b9ab3219/"
            target="_blank"
            rel="noreferrer"
          >
            Keenan Deyce
          </a>
        </p>
        <div className="md:flex justify-between items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full md:w-1/2 h-[300px] sm:h-[450px]"
          >
            {/* Google Maps iframe */}
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423812.32927425334!2d18.326422855396498!3d-33.91452907067648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1682582910036!5m2!1sen!2sza"
              className="border-0 w-full h-full md:rounded-l-2xl rounded-2xl"
              allowFullScreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-[#cfeeff] dark:bg-black px-4 lg:px-8 py-8 rounded-xl md:rounded-r-xl"
          >
            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="fullName"
                  value={formState.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white resize-none"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full p-3 focus:outline-none rounded-[10px] bg-primaryColor dark:bg-primaryColor text-white hover:bg-secondaryColor dark:hover:bg-white dark:hover:text-secondaryColor text-center ease-linear duration-150 font-[600]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
