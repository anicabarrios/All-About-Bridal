import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
      });

    e.target.reset(); // Reset form fields
  };

  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-full h-64 md:h-96 mb-6">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.321256984374!2d-80.2491858!3d26.0245951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a966c049db3b%3A0x870f4a26502d9f93!2sAbout%20Love%20Bridal%20and%20Formal!5e0!3m2!1sen!2sus!4v1597939442095!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Our Store</h3>
                <p className="text-lg md:text-l font-light text-gray-800">
                  1749 N University Dr, Pembroke Pines, FL 33024
                </p>
                <p className="text-lg md:text-l font-light text-gray-800">
                  Phone: (754) 263-3480
                </p>
                <p className="text-lg md:text-l font-light text-gray-800">
                  Email: aboutlovebaf@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
              <form className="grid grid-cols-1 gap-6 mt-10" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    />
                  </div>
                  <div className="mb-4 relative">
                    <input
                      type="date"
                      name="date"
                      value={dateValue}
                      onChange={handleDateChange}
                      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom ${
                        dateValue ? 'text-gray-900' : 'text-transparent'
                      }`}
                    />
                    {!dateValue && (
                      <label
                        htmlFor="date"
                        className="absolute left-4 top-2 text-gray-400 pointer-events-none"
                      >
                        Date of Wedding
                      </label>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-transparent border-2 border-gray-500 text-gray-600 font-semibold rounded-md hover:bg-white hover:text-customdark hover:border-customdark transition duration-300 ease-in-out px-10 py-4 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
