import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { allData } from '../data/allData';
import { Helmet } from 'react-helmet';

const MotherOfBride = () => {
  const motherOfBrideData = allData.filter(item => item.category === 'Mother of the Bride');

  return (
    <>
      <Helmet>
        <title>Mother of the Bride Dresses - About Love Bridal</title>
        <meta
          name="description"
          content="Shop for beautiful and elegant Mother of the Bride dresses at About Love Bridal."
        />
      </Helmet>
      <div>
        <Header />
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight mb-12 pt-5 text-gray-900">
              Mother of the Bride Dresses
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {motherOfBrideData.map(dress => (
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

export default MotherOfBride;
