import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData'; 
import { Helmet } from 'react-helmet';

const Bridesmaids = () => {
  const bridesmaidsData = allData.filter(item => item.category === 'Bridesmaids');

  return (
    <>
      <Helmet>
        <title>Bridesmaids Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Explore our bridesmaids dress collection to find the perfect look for your bridal party."
        />
      </Helmet>
      <div>
        <Header />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">
              Bridesmaids Dresses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {bridesmaidsData.map(dress => (
                <Card key={dress.id} id={dress.id} image={dress.images[0]} name={dress.name} category={dress.category} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Bridesmaids;
