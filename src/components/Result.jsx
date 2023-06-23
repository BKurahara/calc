import { useState } from "react";

const Result = ({ numberOne, numberTwo, inputValue }) => {
  const [result, setResult] = useState("");

  const num1 = parseInt(numberOne);
  const num2 = parseInt(numberTwo);
  if (inputValue == "soma") {
    const calc = num1 + num2;
    setResult(calc);
  }
  if (inputValue == "sub") {
    const calc = num1 - num2;
    setResult(calc);
  }
  if (inputValue == "div") {
    const calc = num1 / num2;
    setResult(calc);
  }
  if (inputValue == "multi") {
    const calc = num1 * num2;
    setResult(calc);
  }

  return (
    <div>
      <h1>O resultado é: {result}</h1>
    </div>
  );
};
export default Result;
