import React from "react";

const CalculateBtn = ({ text, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="w-24 border-black border-2 py-2 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default CalculateBtn;
