import React from 'react';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex justify-center items-center">
              <img src="/images/hero1.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start text-left">
              <p className="text-lg md:text-2xl font-light text-gray-800 mb-6">
              We genuinely care about the outcome of your dress as customer satisfaction is our main priority. All of your alterations can be done right here in our store by a skilled alterations specialist with over 40 years of experience.
              </p>
              <p className="text-lg md:text-2xl font-light text-gray-800 mb-6">
              In-house alterations are optional, so you may take your dress as soon as it arrives and is fully paid off.
              </p>
              <p className="text-lg md:text-2xl font-light text-gray-800 mb-6">
              We offer various designers in both bridal and formal collections that we successfully worked with for over 12 years. We cater to plus size customers and have a wide selections up to size 32.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <h3 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-8 text-gray-900">Our Commitment</h3>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <div className="bg-blush-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Personalized Experience</h4>
                  <p className="text-lg md:text-xl font-light text-gray-800">
                    We offer personalized consultations to help you find the dress that matches your style and vision.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-blush-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">Quality Craftsmanship</h4>
                  <p className="text-lg md:text-xl font-light text-gray-800">
                    Our dresses are crafted with the highest quality materials and attention to detail.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
