import React from 'react';
import styles from './App.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counter/counterSlice';

function App() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="App">
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
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
