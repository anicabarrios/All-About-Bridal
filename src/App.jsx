import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Dresses from './pages/Dresses';
import SpecialOccasions from './pages/SpecialOccasions';
import Quinceanera from './pages/Quinceanera';
import ContactPage from './pages/Contact';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dresses" element={<Dresses />} />
        <Route path="/special-occasions" element={< SpecialOccasions/>} />
        <Route path="/quincanera" element={< Quinceanera/>} />
        <Route path="/contact" element={< ContactPage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
