import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData'; 
import { Helmet } from 'react-helmet';

const dressesCategories = ['All', 'A-Line', 'Ball Gown', 'Fit&Flare'];

const Dresses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const dressesData = allData.filter(item => ['A-Line', 'Ball Gown', 'Fit&Flare'].includes(item.category));

  const filterDresses = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Helmet>
        <title>Wedding Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Discover our stunning collection of wedding dresses including A-Line, Ball Gown, and Fit&Flare styles."
        />
      </Helmet>
      <div>
        <Header />
        <main>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h1 className="text-4xl font-bold leading-tight mb-12 text-gray-900">Wedding Dresses</h1>
              <div className="flex justify-center flex-wrap mb-10">
                {dressesCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => filterDresses(category)}
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
                {dressesData
                  .filter(dress => selectedCategory === 'All' || dress.category === selectedCategory)
                  .map(dress => (
                    <Card key={dress.id} id={dress.id} image={dress.images[0]} name={dress.name} category={dress.category} />
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

export default Dresses;
