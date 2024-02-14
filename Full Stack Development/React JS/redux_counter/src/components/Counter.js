import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";

import classes from "./Counter.module.css";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increment By 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // For simple Redux
// import { useSelector, useDispatch } from "react-redux";
// import classes from "./Counter.module.css";
// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const show = useSelector((state) => state.showCounter);

//   const dispatch = useDispatch();

//   const toggleCounterHandler = () => {

//     dispatch({ type: "toggle" });
//   };

//   const incrementCounterHandler = () => {
//     dispatch({ type: "increment" });
//   };

//   const increaseCounterHandler = () => {
//     dispatch({ type: "increase", amount:5});
//   };

//   const decrementCounterHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementCounterHandler}>Increment</button>
//         <button onClick={increaseCounterHandler}>Increment By 5</button>
//         <button onClick={decrementCounterHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// //  For Class Components
// import React, { Component, } from "react";
// import { connect  } from "react-redux";

// class Counter extends Component {
//   incrementCounterHandler = () => {
//     this.props.increment();
//   };
//   decrementCounterHandler = () => {
//     this.props.decrement();
//   };
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementCounterHandler.bind(this)}>
//             Increment
//           </button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
//         <button>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
