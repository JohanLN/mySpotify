import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions';

function App() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello !</h1>

      <h2>Counter = {counter}</h2>

      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>

    </div>
  );
}

export default App;
