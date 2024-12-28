import React from 'react';
//import styles from './App.module.scss';
//import { useDispatch, useSelector } from 'react-redux';
//import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/Details/Details';
import Listing from './components/Listing/Listing';

function App() {
 //const count = useSelector((state: any) => state.counter.value)
 //const dispatch = useDispatch()

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
        <Route path="/" element={
          <>
            {/* <div className="App">
              <div className={styles.testClass}>
                Test
              </div>
              <span>{count}</span>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <button
                aria-label="Increment value"
                onClick={() => dispatch(incrementByAmount(2))}
              >
                Increment By 2
              </button>
              <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div> */}
            <Listing   />
          </>
        } />
        <Route path="/details" element={<Details title={''} year={''} genre={''} director={''} plot={''} />} />
      </Routes>
    </Router>
  );
}
//apikey=51010232
export default App;
