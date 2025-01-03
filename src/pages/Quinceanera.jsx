import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData'; 
import { Helmet } from 'react-helmet';

const quinceaneraCategories = ['All', 'Dresses', 'Accessories'];

const Quinceanera = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(
    allData.filter(item => item.category === 'Dresses' || item.category === 'Accessories')
  );

  const filterItems = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredItems(allData.filter(item => item.category === 'Dresses' || item.category === 'Accessories'));
    } else {
      setFilteredItems(allData.filter(item => item.category === category));
    }
  };

  return (
    <>
      <Helmet>
        <title>Quinceañera Dresses and Accessories - About Love Bridal</title>
        <meta
          name="description"
          content="Browse our beautiful quinceañera collection, including dresses and accessories, for your special day."
        />
      </Helmet>
      <div>
        <Header />
        <main>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">Quinceañera Dresses and Accessories</h2>
              <div className="flex justify-center flex-wrap mb-12">
                {quinceaneraCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => filterItems(category)}
                    className={`px-4 py-2 mx-2 my-2 rounded-full font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-white text-customdark border-2 border-customdark hover:border-gray-500 hover:text-gray-500'
                        : 'bg-white border-2 text-gray-700 hover:bg-custom hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredItems.map(item => (
                  <Card key={item.id} id={item.id} image={item.images[0]} name={item.name} category={item.category} />
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Quinceanera;
