import React from "react";

const Button = ({ label, ClickHandle }) => {
  return (
    <button className="ButtonStyle" value={label} onClick={ClickHandle}>
      {label}
    </button>
  );
};

export default Button;
