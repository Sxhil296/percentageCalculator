import React, { useState } from "react";
import InputField from "./InputField";
import CalculateBtn from "./CalculateBtn";

const FourthCalculator = () => {
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
    const initialValue = parseFloat(num1);
    const finalValue = parseFloat(num2);
    const answer = ((finalValue - initialValue) / initialValue) * 100;
    setResult(answer.toFixed(2));
  };
  return (
    <>
      <div className="flex flex-col gap-2 border-2 border-black bg-[#f76363] p-2 rounded-md cursor-pointer hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
        <h2 className="underline text-center text-sm mb-2">
        Percentage Change Calculator
        </h2>
        <div className="flex gap-2">
          <span className="font-medium">
          What is the percentage decrease/increase from
          </span>
          <InputField value={num1} onChange={(e) => setNum1(e.target.value)} />
        </div>
        <div className="flex gap-2">
          <span className="font-medium"> to</span>
          <InputField value={num2} onChange={(e) => setNum2(e.target.value)} />
          <span className="font-medium">?</span>
        </div>
        <CalculateBtn text="Calculate" onClick={handleCalculate} />
        <p className="font-medium">Result : {result}% </p>
      </div>
    </>
  );
};

export default FourthCalculator;
