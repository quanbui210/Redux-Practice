import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
// import { counterActions } from '../store/counter-slice';

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  console.log(counter, showCounter)


  const incrementHandler = () => {
    dispatch({
      type: "INCREMENT",
      payload: 1
    }) //full action method automatically created
  }
  //automatically created an object {type: unique identifier, payload*: num}
  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
      payload: 1
    })
  }

  const increaseFive = () => {
    dispatch({
      type: "INCREMENT",
      payload: 5
    })
  }

  const toggleCounterHandler = () => {
    dispatch({
      type: "TOGGLE",
    })
  };

  const resetCounter = () => {
    dispatch({
      type: "RESET",
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseFive}>Increase by 5</button>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
