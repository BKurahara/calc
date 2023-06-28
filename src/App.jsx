import { useState } from "react";
import "./App.css";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createRoot } from "react-dom/client";
import Action from "./components/Action";
import Result from "./components/Result";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const ref = useRef();
  const handleSubmit = (action) => {
    setInputValue(action);
    console.log(inputValue);

    ref.current.Problem();
  };

  return (
    <div className="app">
      <h1>Cálculos</h1>

      <div className="number-container">
        <input
          type="number"
          name="first-number"
          placeholder="10"
          required
          onChange={(e) => setNumberOne(e.target.value)}
          value={numberOne}
        />
        <input
          type="number"
          name="second-number"
          placeholder="10"
          required
          onChange={(e) => setNumberTwo(e.target.value)}
          value={numberTwo}
        />
      </div>
      <Action ActionSubmit={handleSubmit} />

      <Result
        ref={ref}
        numberOne={numberOne}
        numberTwo={numberTwo}
        inputValue={inputValue}
      />
    </div>
  );
}
export default App;
