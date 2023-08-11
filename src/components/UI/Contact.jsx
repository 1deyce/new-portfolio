import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white dark:bg-black pt-16 pb-16">
      <div className="container">
        <h2 className="text-primaryColor dark:text-primaryColor font-[800] text-5xl mb-8 text-center">
          <span className="border-b-2 border-solid border-secondaryColor dark:border-white">
            Get in touch
          </span>
        </h2>
        <p className="text-secondaryColor dark:text-white mb-10 pt-5 text-center font-[500]">
          <span className="text-primaryColor font-[800]">E-Mail: </span>
          keenandeyce@gmail.com <br />
          <span className="text-primaryColor font-[800]">Whatsapp: </span>
          +27 66 216 1232 <br />
          <span className="text-primaryColor font-[800]">LinkedIn: </span>
          https://www.linkedin.com/in/keenan-deyce-5b9ab3219/
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
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 dark:bg-black px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="fullName" // Add a name attribute to the input
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="email" // Add a name attribute to the input
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white"
                  name="subject" // Add a name attribute to the input
                  required
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  rows={3}
                  placeholder="Write your message"
                  className="w-full p-3 focus:outline-none rounded-[5px] dark:bg-[#2b2d33] dark:text-white resize-none"
                  name="message" // Add a name attribute to the textarea
                  required
                />
              </div>

              <button className="w-full p-3 focus:outline-none rounded-[10px] bg-primaryColor dark:bg-primaryColor text-white hover:bg-secondaryColor dark:hover:bg-white dark:hover:text-secondaryColor text-center ease-linear duration-150 font-[600]">
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
