import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import QuinceaneraLanding from '../components/QuinceaneraLanding';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>About Love Bridal - Dream Wedding Dresses</title>
        <meta
          name="description"
          content="Explore stunning wedding dresses, quinceañera gowns, and formal wear at About Love Bridal."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "About Love Bridal and Formal",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1749 N University Dr",
                "addressLocality": "Pembroke Pines",
                "addressRegion": "FL",
                "postalCode": "33024"
              },
              "description": "We offer a variety of bridal dresses, quinceañera gowns, and more.",
              "telephone": "+1-754-263-3480"
            }
          `}
        </script>
      </Helmet>
      <div>
        <Header />
        <main>
          <Hero />
          <section aria-labelledby="quinceanera-section">
            <h2 id="quinceanera-section" className="sr-only">Quinceañera Dresses Collection</h2>
            <QuinceaneraLanding />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Home;
