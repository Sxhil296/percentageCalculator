import React from "react";

const InputField = ({ value, onChange }) => {
  return (
    <div>

      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border-2 border-black outline-none focus:shadow-[2px_2px_0px_rgba(0,0,0,1)] w-44 px-2 font-medium"
      />
    </div>
  );
};

export default InputField;
