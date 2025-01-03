import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load the components
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Dresses = lazy(() => import('./pages/Dresses'));
const SpecialOccasions = lazy(() => import('./pages/SpecialOccasions'));
const Quinceanera = lazy(() => import('./pages/Quinceanera'));
const ContactPage = lazy(() => import('./pages/Contact'));
const MotherOfBride = lazy(() => import('./pages/MotherOfBride'));
const Bridesmaids = lazy(() => import('./pages/Bridesmaids'));
const Detail = lazy(() => import('./pages/Detail'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path="/special-occasions" element={<SpecialOccasions />} />
          <Route path="/quinceanera" element={<Quinceanera />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/wedding/mother-of-bride" element={<MotherOfBride />} />
          <Route path="/wedding/bridesmaids" element={<Bridesmaids />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
