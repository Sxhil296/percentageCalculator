import React, { useState } from "react";
import InputField from "./InputField";
import CalculateBtn from "./CalculateBtn";

const SimpleCalculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    if (num1.trim() === "" || num2.trim() === "") {
      alert("Please enter the values.");
      return;
    }
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
    const answer = (parseFloat(num1) / 100) * parseFloat(num2);
    setResult(answer.toFixed(2));
  };
  return (
    <>
      <div className="flex flex-col gap-2 border-2 border-black bg-[#fa7fee] p-2 rounded-md">
        <h2 className="underline text-center text-sm mb-2">
          Simple Calculator
        </h2>
        <div className="flex gap-2">
          <span className="font-medium">What is </span>
          <InputField value={num1} onChange={(e) => setNum1(e.target.value)} />
          <span className="font-medium">%</span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium">of</span>
          <InputField value={num2} onChange={(e) => setNum2(e.target.value)} />
          <span className="font-medium">?</span>
        </div>
        <CalculateBtn text="Calculate" onClick={handleCalculate} />
        <p className="font-medium">Result : {result} </p>
      </div>
    </>
  );
};

export default SimpleCalculator;
