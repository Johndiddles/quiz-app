import React from "react";

const SingleOption = ({ option, choices, handleSelection }) => {
  return (
    <div className="flex gap-4">
      <input
        type="radio"
        id={option}
        value={option}
        onChange={handleSelection}
        name="answer"
      />
      <label htmlFor={option}>{choices[option]}</label>
    </div>
  );
};

export default SingleOption;
