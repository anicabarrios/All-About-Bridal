import React from 'react';
import Header from '../components/Header';

const Contact = () => {
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
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Our Store</h3>
                <p className="text-lg md:text-xl font-light text-gray-800 mb-2">
                  1749 N University Dr, Pembroke Pines, FL 33024
                </p>
                <p className="text-lg md:text-xl font-light text-gray-800 mb-2">
                  Phone: (754) 263-3480
                </p>
                <p className="text-lg md:text-xl font-light text-gray-800 mb-2">
                  Email: aboutlovebaf@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h3>
              <form className="grid grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="date"
                      placeholder="Date of Wedding"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-custom"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-10 py-4 bg-custom text-white font-semibold rounded-full hover:bg-customdark transition duration-300 text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
