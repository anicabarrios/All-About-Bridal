import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';
import { Helmet } from 'react-helmet';

const categories = ['All', 'Evening/Prom', 'Cocktail/Homecoming'];

const SpecialOccasions = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const sodata = allData.filter(item => ['Evening/Prom', 'Cocktail/Homecoming'].includes(item.category));
  const [filterso, setFilterso] = useState(sodata);

  const filterSpecialOccasions = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilterso(sodata);
    } else {
      setFilterso(sodata.filter(item => item.category === category));
    }
  };

  return (
    <>
      <Helmet>
        <title>Special Occasion Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Discover our collection of special occasion dresses for evening and prom events, cocktail parties, and more."
        />
      </Helmet>
      <div>
        <Header />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">
              Special Occasion Dresses
            </h1>
            <div className="flex justify-center flex-wrap mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => filterSpecialOccasions(category)}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {filterso.map(item => (
                <Card key={item.id} id={item.id} image={item.images[0]} name={item.name} category={item.category} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default SpecialOccasions;
