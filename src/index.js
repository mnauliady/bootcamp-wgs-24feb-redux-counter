import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Navbar from "./navbar";
// import createStore from "redux";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import storeValue from "./storeValue";
import { increment, decrement, reset } from "./counterHelpers";

function Counter() {
  const dispatch = useDispatch();

  // selector untuk mendapatkan data dari state
  const counter = useSelector((state) => state.counter.value);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Value : {counter}</p>
      {/* dispatch action increment */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      {/* dispatch action decrement */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      {/* dispatch action reset */}
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeValue}>
      <Counter />
    </Provider>
  </React.StrictMode>
);
