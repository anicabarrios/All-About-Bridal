import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeart, FaRegPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EMAILJS_SERVICE_ID = 'service_vjkbzlh'; 
const EMAILJS_TEMPLATE_ID = 'template_odhm3wc'; 
const EMAILJS_PUBLIC_KEY = '1wrPC41moiruYGPwQ'; 

const Contact = () => {
  const [dateValue, setDateValue] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debug, setDebug] = useState('');
  const formRef = useRef();

  const handleDateChange = (e) => {
    setDateValue(e.target.value);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    
    setIsSubmitting(true);
    setDebug(''); 
    
    try {
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone') || 'Not provided';
      const date = formData.get('date') || 'Not provided';
      const message = formData.get('message');
      
      const templateParams = {
        from_name: name,
        reply_to: email,
        phone_number: phone,
        event_date: date,
        message: message,
        to_name: 'About Love Bridal',
        to_email: 'anicabarrios1@gmail.com', // Add recipient email explicitly
        subject: `New Inquiry from ${name}`
      };
      
      setDebug(`Preparing to send email: ${JSON.stringify(templateParams, null, 2)}`);
      
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID, 
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      if (response.status === 200) {
        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        setDebug(prev => prev + '\nEmail sent successfully!');
        e.target.reset();
        setDateValue('');
      } else {
        throw new Error(`Failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setDebug(prev => prev + `\nError: ${error.message || 'Unknown error'}`);
      setFormStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact us directly at aboutlovebaf@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Visit Our Boutique",
      content: "1749 N University Dr, Pembroke Pines, FL 33024",
      link: "https://goo.gl/maps/yourMapLink"
    },
    {
      icon: FaPhone,
      title: "Call Us Today",
      content: "(754) 263-3480",
      link: "tel:+17542633480"
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      content: "aboutlovebaf@gmail.com",
      link: "mailto:aboutlovebaf@gmail.com"
    },
    {
      icon: FaClock,
      title: "Boutique Hours",
      content: "Mon-Fri: 11:00 AM - 6:00 PM\nSat: 1:00 PM - 6:00 PM\nSun: Closed",
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-white via-custom/5 to-white">
        <div className="pt-24 pb-16">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-custom to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <FaHeart className="text-custom h-8 w-8 opacity-20" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
              Let's Connect
            </h1>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Begin your journey to finding the perfect dress. We're here to make your dreams come true.
            </p>
          </motion.div>

          {/* Map and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-[300px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg relative group"
            >
              <div className="absolute inset-0 border-2 border-custom/20 rounded-xl z-10 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
              <iframe
                title="Store Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.321256984374!2d-80.2491858!3d26.0245951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a966c049db3b%3A0x870f4a26502d9f93!2sAbout%20Love%20Bridal%20and%20Formal!5e0!3m2!1sen!2sus!4v1597939442095!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-custom/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-custom/5 rounded-full translate-y-16 -translate-x-16"></div>

              <h2 className="text-2xl font-serif text-gray-900 mb-6 relative">
                Send Us a Message
                <div className="w-12 h-1 bg-gradient-to-r from-custom to-transparent mt-2"></div>
              </h2>
              
              {formStatus.message && (
                <div className={`mb-6 p-4 rounded-lg relative overflow-hidden ${
                  formStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent"></div>
                  <div className="relative">{formStatus.message}</div>
                </div>
              )}

              <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-custom focus:ring-2 focus:ring-custom/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-custom focus:ring-2 focus:ring-custom/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-custom focus:ring-2 focus:ring-custom/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type="date"
                      name="date"
                      value={dateValue}
                      onChange={handleDateChange}
                      className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-custom focus:ring-2 focus:ring-custom/20 transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        !dateValue ? 'text-transparent' : 'text-gray-700'
                      }`}
                    />
                    <span 
                      className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none transition-colors duration-300 ${
                        dateValue ? 'text-transparent' : 'text-gray-400'
                      }`}
                    >
                      Wedding Date
                    </span>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-custom focus:ring-2 focus:ring-custom/20 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    required
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom transition-all duration-300 group-hover:w-full"></div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full sm:w-auto px-8 py-3 bg-custom text-white rounded-lg hover:bg-customdark transition-all duration-300 font-medium text-lg overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaRegPaperPlane className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-customdark to-custom opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Contact Information Cards */}
          <div className="mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-2xl font-serif text-gray-900 mb-4">
                Ways to Connect
              </h2>
              <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-custom to-transparent"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-custom/10 to-custom/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-7 h-7 text-custom" />
                    </div>
                    <h3 className="text-lg font-serif text-gray-900 mb-3">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link}
                        className="text-gray-600 hover:text-custom transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    )}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-custom/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;