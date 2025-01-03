import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { allData } from '../../data/allData';

const QuinceaneraLanding = () => {
  const navigate = useNavigate();

  // Filter the data to only include Quinceañera items
  const quinceaneraData = allData.filter(item => item.category === 'Dresses' || item.category === 'Accessories');

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 4; // Number of items to show in the carousel

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quinceaneraData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [quinceaneraData.length]);

  const handleButtonClick = () => {
    navigate('/quinceanera'); // Navigate to the Quinceañera page
  };

  // Get the subset of data to display in the carousel
  const visibleItems = quinceaneraData.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full overflow-hidden flex">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className={`flex-1 bg-cover bg-center transition-opacity duration-1000 ${index === 0 ? 'opacity-100' : 'opacity-75'}`}
            style={{ backgroundImage: `url(${item.images[0]})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
          </div>
        ))}
      </div>
      <div className="relative container mx-auto px-6 lg:px-12 py-32 lg:py-40 flex flex-col items-center text-center text-white z-10">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">Quinceañera Collection</h2>
        <p className="text-xl md:text-3xl font-light mb-10">Elegance, Style, and Unmatched Beauty for Your Special Day</p>
        <button 
          onClick={handleButtonClick} // Add the onClick event
          className="px-10 py-4 bg-custom text-white font-semibold rounded-full hover:bg-customdark transition duration-300 text-lg md:text-xl">
          View Full Collection
        </button>
      </div>
    </section>
  );
}

export default QuinceaneraLanding;
