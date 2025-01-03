import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us - About Love Bridal</title>
        <meta
          name="description"
          content="Learn more about About Love Bridal, our dedication to quality craftsmanship, and the exceptional service we offer."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "About Love Bridal and Formal",
              "url": "https://www.aboutlovebridal.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1749 N University Dr",
                "addressLocality": "Pembroke Pines",
                "addressRegion": "FL",
                "postalCode": "33024"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-754-263-3480",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>
      <div>
        <Header />
        <main className="py-24 bg-gradient-to-r from-white to-gray-100">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-4">
              <div className="relative flex justify-center items-center">
                <img
                  src="/images/hero1.jpg"
                  alt="About Love Bridal Store"
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-25 rounded-lg"></div>
              </div>
              <div className="flex flex-col justify-center text-left space-y-8 relative">
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-200 via-white to-purple-300 blur-xl rounded-lg transform -translate-x-4 -translate-y-4"></div>
                <h1 className="text-2xl md:text-5xl font-medium leading-tight tracking-tight text-gray-900 font-serif relative z-10">
                  About Us
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-700 font-sans relative z-10">
                  We genuinely care about the outcome of your dress, as customer satisfaction is our main priority. All
                  alterations are done in-house by a skilled specialist with over 40 years of experience.
                </p>
                <p className="text-xl md:text-2xl font-light text-gray-700 font-sans relative z-10">
                  In-house alterations are optional, so you can take your dress as soon as it arrives and is fully paid off.
                </p>
                <p className="text-xl md:text-2xl font-light text-gray-700 font-sans relative z-10">
                  We offer a variety of designers in both bridal and formal collections, successfully collaborating for over 12 years. We cater to plus-size customers, offering a wide selection up to size 32.
                </p>
              </div>
            </div>

            {/* Commitment Section */}
            <div className="mt-24">
              <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight mb-12 text-gray-900 font-serif">
                Our Commitment
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-xl relative overflow-hidden transition-transform transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-custom opacity-40"></div>
                  <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 font-serif">Personalized Experience</h4>
                  <p className="text-xl font-light text-gray-700 font-sans">
                    We offer personalized consultations to help you find the dress that matches your style and vision.
                  </p>
                </div>
                <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-xl relative overflow-hidden transition-transform transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-custom opacity-40"></div>
                  <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 font-serif">Quality Craftsmanship</h4>
                  <p className="text-xl font-light text-gray-700 font-sans">
                    Our dresses are crafted with the highest quality materials and attention to detail.
                  </p>
                </div>
                <div className="bg-white bg-opacity-90 backdrop-blur-md p-10 rounded-xl shadow-xl relative overflow-hidden transition-transform transform hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom via-transparent to-custom opacity-40"></div>
                  <h4 className="text-2xl md:text-3xl font-medium text-gray-900 mb-4 font-serif">Exceptional Service</h4>
                  <p className="text-xl font-light text-gray-700 font-sans">
                    We are dedicated to providing exceptional service to make your experience seamless and memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
