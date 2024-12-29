import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Listing from './components/Listing/Listing';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/details/:imdbID" element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
