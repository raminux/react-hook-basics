import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <button onClick={incrementItem}>Increase</button>
      <button onClick={decrementItem}>Decrease</button>
    </div>
  );
}

export default App;
