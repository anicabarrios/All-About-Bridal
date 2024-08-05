import React, { useState } from 'react';
import Header from '../components/Header';

const accessoriesData = [
  { id: 1, category: 'Evening/Prom', name: 'Evening/Prom', image: '/images/accessory1.jpg' },
  { id: 2, category: 'Cocktail/Homecoming', name: 'Cocktail/Homecoming', image: '/images/accessory2.jpg' },
  // Add more accessories here
];

const categories = ['All', 'Evening/Prom', 'Cocktail/Homecoming'];

const SpecialOccasions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredAccessories, setFilteredAccessories] = useState(accessoriesData);

  const filterAccessories = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredAccessories(accessoriesData);
    } else {
      setFilteredAccessories(accessoriesData.filter(accessory => accessory.category === category));
    }
  };

  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">Special Occasions</h2>
          <div className="flex justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterAccessories(category)}
                className={`px-4 py-2 mx-2 rounded-full font-medium transition duration-300 ${selectedCategory === category ? 'bg-custom text-white' : 'bg-gray-200 text-gray-700 hover:bg-custom hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {filteredAccessories.map(accessory => (
              <div key={accessory.id} className="flex flex-col items-center">
                <img src={accessory.image} alt={accessory.name} className="w-full h-auto rounded-lg shadow-lg mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{accessory.name}</h3>
                <p className="text-lg md:text-xl font-light text-gray-800">{accessory.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpecialOccasions;
