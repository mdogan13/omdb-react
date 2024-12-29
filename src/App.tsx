import React from 'react';
//import styles from './App.module.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Listing from './components/Listing/Listing';

const App: React.FC = () => {
  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>

        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/details/:imdbID" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
