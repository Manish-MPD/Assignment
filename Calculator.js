import React, { useState } from "react";
import "./Calculator.css";
import Button from "./Button";
import meImage from './aa.jpg'; // Import your image here

function Calculator() {
  const [text1, setText] = useState("");
  const [showImage, setShowImage] = useState(false);

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "C") {
      setText("");
    } else if (value === "=") {
      try {
        setText(eval(text1).toString());
        alert(eval(text1));
      } catch {
        alert("Invalid input");
      }
    } else if (value === "x²") {
      try {
        const num = parseFloat(text1);
        if (!isNaN(num)) {
          const square = num * num;
          setText(square.toString());
          alert(`Square: ${square}`);
        } else {
          alert("Please enter a valid number to square");
        }
      } catch {
        alert("Error in calculation");
      }
    } else {
      setText(text1 + value);
    }
  };

  const handleShowImageClick = () => {
    setShowImage(true);
  };

  return (
    <div className="Calculator">
      <div className="screen-row">
        <input type="text" readOnly value={text1} />
      </div>
      <div>
        <Button label="(" ClickHandle={handleClick} />
        <Button label="CE" ClickHandle={handleClick} />
        <Button label=")" ClickHandle={handleClick} />
        <Button label="C" ClickHandle={handleClick} />
      </div>
      <div>
        <Button label="1" ClickHandle={handleClick} />
        <Button label="2" ClickHandle={handleClick} />
        <Button label="3" ClickHandle={handleClick} />
        <Button label="+" ClickHandle={handleClick} />
      </div>
      <div>
        <Button label="4" ClickHandle={handleClick} />
        <Button label="5" ClickHandle={handleClick} />
        <Button label="6" ClickHandle={handleClick} />
        <Button label="-" ClickHandle={handleClick} />
      </div>
      <div>
        <Button label="7" ClickHandle={handleClick} />
        <Button label="8" ClickHandle={handleClick} />
        <Button label="9" ClickHandle={handleClick} />
        <Button label="*" ClickHandle={handleClick} />
      </div>
      <div>
        <Button label="." ClickHandle={handleClick} />
        <Button label="0" ClickHandle={handleClick} />
        <Button label="=" ClickHandle={handleClick} />
        <Button label="/" ClickHandle={handleClick} />
      </div>
      <div>
        {/* Add square button */}
        <Button label="x²" ClickHandle={handleClick} />
      </div>
      {/* Add "Show Me" button */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <button onClick={handleShowImageClick} style={{ padding: "10px", fontSize: "16px" }}>
          Show Me
        </button>
        {showImage && (
          <div style={{ marginTop: "20px" }}>
            <img
              src={meImage}
              alt="Hi I am Manish Dahal"
              style={{
                width: "300px",
                height: "auto",
                borderRadius: "15px",
                border: "3px solid #ccc",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Calculator;
