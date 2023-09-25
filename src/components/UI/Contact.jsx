import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "./firebaseConfig";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import "aos/dist/aos.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [captchaIsDone, setCaptchaIsDone] = useState(false);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/u;
  const key = "6LfXXtMnAAAAAAwm1r3zNSHpqL9f1LflAfdDjirq";

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!captchaIsDone) {
      alert("Please complete the reCAPTCHA.")
      return;
    }

    setIsLoading(true);

    try {
      await axios.post('https://agile-colt-waistcoat.cyclic.app/email', {
        fullName,
        email,
        subject,
        message,
      });

      await addDoc(collection(db, "messages"), {
        fullName,
        email,
        subject,
        message,
      });

      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 5000);

    } catch (error) {
      console.error("Error adding document: ", error);
    }

    setIsLoading(false);
  };

  return (
    <section
      id="contact" 
      className="bg-white dark:bg-black pt-24 pb-10"
    >
      <div className="container">
        <h2 className="text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-8 text-center">
          <span className="border-b-2 border-solid border-secondaryColor dark:border-white">
            Get in touch
          </span>
        </h2>
        <div className="grid lg:grid-cols-3 grid-rows-3 mt-20 mb-20 lg:mb-0">
          <p className="text-secondaryColor dark:text-white text-center font-semibold text-lg">
            <span className="text-primaryColor font-[900]">E-Mail: </span>
            keenandeyce@gmail.com
          </p>
          <p className="text-secondaryColor dark:text-white text-center font-semibold text-lg">
            <span className="text-primaryColor font-[900]">Whatsapp: </span>
            +27 66 216 1232
          </p>
          <p className="text-secondaryColor dark:text-white text-center font-semibold text-lg">
            <span className="text-primaryColor font-[900]">LinkedIn: </span>
            <a
              className="hover:cursor-pointer hover:underline hover:text-primaryColor"
              href="https://www.linkedin.com/in/keenan-deyce"
              target="_blank"
              rel="noreferrer"
            >
              Keenan Deyce
            </a>
          </p>
        </div>
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
              className="border-0 w-full h-full rounded-2xl"
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
            <form 
              onSubmit={handleFormSubmit} 
              className="w-full"
            >
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    const enteredEmail = e.target.value;
                    setEmail(enteredEmail);
                    setIsEmailValid(emailRegex.test(enteredEmail));
                  }}
                  required
                />
                {!isEmailValid && email.length > 0 && (
                  <p className="text-red-600 text-[14px]">Please enter a valid email.</p>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              {!captchaIsDone ? (
                <ReCAPTCHA 
                  className="flex justify-center" 
                  sitekey={key} 
                  onChange={(value) => {
                    setCaptchaIsDone(value);
                    setShowSubmitButton(true);
                  }} 
                />
              ) : (
                showSubmitButton && (
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full p-3 focus:outline-none rounded-[10px] bg-primaryColor dark:bg-primaryColor text-white hover:bg-secondaryColor dark:hover:bg-white dark:hover:text-secondaryColor text-center ease-linear duration-150 font-[600]"
                  >
                    {isLoading ? 'Submitting...' : 'Send Message'}
                  </button>
                )
              )}
              {success && (
                <p className="text-primaryColor">Form submitted successfully, I'll be in touch!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
