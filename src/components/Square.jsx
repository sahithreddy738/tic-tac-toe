import React from "react";

const SqaureBox = ({ index, value, onClick }) => {
  const handleClick = (ind) => {
    onClick(ind);
  };
  return (
    <div
      className="hover:bg-gray-400 flex items-center justify-center rounded-lg bg-white border-2 border-gray-400"
      onClick={() => handleClick(index)}
    >
      <h1 className="font-semibold text-lime-700 text-5xl ">{value}</h1>
    </div>
  );
};

export default SqaureBox;
