import React, { useState } from 'react';
import Header from '../components/Header';

const dressesData = [
  // Sample data structure, replace with actual data
  { id: 1, category: 'A-Line', name: 'Elegant A-Line', image: '/images/image1.jpg' },
  { id: 2, category: 'Ball Gown', name: 'Beautiful Ball Gown', image: '/images/image2.jpg' },
  { id: 3, category: 'Mermaid', name: 'Stunning Mermaid', image: '/images/image3.jpg' },
  // Add more dresses here
];

const categories = ['All', 'A-Line', 'Ball Gown', 'Mermaid', 'Trumpet', 'Simple'];

const Dresses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredDresses, setFilteredDresses] = useState(dressesData);

  const filterDresses = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredDresses(dressesData);
    } else {
      setFilteredDresses(dressesData.filter(dress => dress.category === category));
    }
  };

  return (
    <div>
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">Wedding Dresses</h2>
          <div className="flex justify-center flex-wrap mb-12">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => filterDresses(category)}
                className={`px-4 py-2 mx-2 my-2 rounded-full font-medium transition duration-300 ${selectedCategory === category ? 'bg-custom text-white' : 'bg-gray-200 text-gray-700 hover:bg-custom hover:text-white'}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredDresses.map(dress => (
              <div key={dress.id} className="flex flex-col items-center">
                <img src={dress.image} alt={dress.name} className="w-full h-auto rounded-lg shadow-lg mb-4" />
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">{dress.name}</h3>
                <p className="text-lg md:text-xl font-light text-gray-800">{dress.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dresses;
