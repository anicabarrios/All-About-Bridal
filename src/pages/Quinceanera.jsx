import React, { useState } from 'react';
import Header from '../components/Header';

const quinceaneraData = [
  // Sample data structure, replace with actual data
  { id: 1, category: 'Dresses', name: 'Quinceañera Ball Gown', image: '/images/quinceanera1.jpg' },
  { id: 2, category: 'Dresses', name: 'Elegant Quinceañera Dress', image: '/images/quinceanera2.jpg' },
  { id: 3, category: 'Accessories', name: 'Beautiful Tiara', image: '/images/quinceanera3.jpg' },
  { id: 4, category: 'Accessories', name: 'Gorgeous Necklace', image: '/images/quinceanera4.jpg' },
  // Add more items here
];

const categories = ['All', 'Dresses', 'Accessories'];

const Quinceanera = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(quinceaneraData);

  const filterItems = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(quinceaneraData);
    } else {
      setFilteredItems(quinceaneraData.filter(item => item.category === category));
    }
  };

  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">Quinceañera Dresses and Accessories</h2>
          <div className="flex justify-center mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterItems(category)}
                className={`px-4 py-2 mx-2 rounded-full font-medium transition duration-300 ${selectedCategory === category ? 'bg-custom text-white' : 'bg-gray-200 text-gray-700 hover:bg-custom hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {filteredItems.map(item => (
              <div key={item.id} className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-full h-auto rounded-lg shadow-lg mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-lg md:text-xl font-light text-gray-800">{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Quinceanera;
