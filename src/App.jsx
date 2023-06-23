import { useState } from "react";
import "./App.css";

import Action from "./components/Action";
import Result from "./components/Result";

function App() {
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (action) => {
    e.preventDefault();

    console.log("sim");
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
      <Action handleFormSubmit={handleSubmit} />

      <Result
        numberOne={numberOne}
        numberTwo={numberTwo}
        inputValue={inputValue}
      />
    </div>
  );
}
export default App;
