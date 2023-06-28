import { useState } from "react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";
// const Result = ({ numberOne, numberTwo, inputValue }) => {
//   const [result, setResult] = useState("");

//   const num1 = parseInt(numberOne);
//   const num2 = parseInt(numberTwo);
//   if (inputValue == "soma") {
//     const calc = num1 + num2;
//     setResult(calc);
//   }
//   if (inputValue == "sub") {
//     const calc = num1 - num2;
//     setResult(calc);
//   }
//   if (inputValue == "div") {
//     const calc = num1 / num2;
//     setResult(calc);
//   }
//   if (inputValue == "multi") {
//     const calc = num1 * num2;
//     setResult(calc);
//   }

const Result = forwardRef((props, ref) => {
  const [result, setResult] = useState("");
  useImperativeHandle(ref, () => ({
    Problem() {
      const num1 = parseInt(props.numberOne);
      const num2 = parseInt(props.numberTwo);
      if (props.inputValue == "soma") {
        const calc = num1 + num2;
        setResult(calc);
      }
      if (props.inputValue == "sub") {
        const calc = num1 - num2;
        setResult(calc);
      }
      if (props.inputValue == "div") {
        const calc = num1 / num2;
        setResult(calc);
      }
      if (props.inputValue == "multi") {
        const calc = num1 * num2;
        setResult(calc);
      }
    },
  }));

  return (
    <div>
      <h1>O resultado é: {result}</h1>
    </div>
  );
});
export default Result;
