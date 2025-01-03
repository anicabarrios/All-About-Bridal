import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allData } from '../data/allData';
import { Helmet } from 'react-helmet';

const Detail = () => {
  const { id } = useParams();
  const item = allData.find(item => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(item.images[0]);

  return (
    <>
      <Helmet>
        <title>{item.name} - About Love Bridal</title>
        <meta
          name="description"
          content={`View details for ${item.name}, part of our exclusive collection at About Love Bridal.`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "${item.name}",
              "image": "${item.images[0]}",
              "description": "Explore our exclusive ${item.name} at About Love Bridal.",
              "brand": {
                "@type": "Brand",
                "name": "About Love Bridal"
              }
            }
          `}
        </script>
      </Helmet>
      <div>
        <Header />
        <div className="container mx-auto px-6 lg:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Image */}
            <div className="col-span-3 flex justify-center items-center">
              <div className="h-[35rem] md:h-[40rem] lg:h-[45rem]">
                <img
                  src={selectedImage}
                  alt={`${item.name} - Bridal Dress`}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-xl border-4 border-gray-200"
                />
              </div>
            </div>

            {/* Thumbnails - centered and aligned without gap */}
            <div className="col-span-1 flex flex-col items-center space-y-4">
              <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
                {item.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Preview ${index + 1} of ${item.name}`}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-110 border-2 border-gray-300"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Dress Name */}
          <div className="text-center mt-12">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900">{item.name}</h2>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Detail;
