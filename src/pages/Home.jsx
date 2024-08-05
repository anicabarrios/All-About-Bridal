import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Dresses from './Dresses';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Dresses/>
      {/* You can add more sections here as needed */}
    </div>
  );
}

export default Home;
