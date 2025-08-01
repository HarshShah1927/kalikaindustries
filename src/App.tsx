import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import B2BCustomers from './pages/B2BCustomers';
import Contact from './pages/Contact';
import WhyChooseUs from './pages/WhyChooseUs';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/b2b-customers" element={<B2BCustomers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;