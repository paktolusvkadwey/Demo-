import React from "react";
import "./Button.css";

const Button = () => {
  return (
    <div className="button_main_div">
      <button
        className="green_button"
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Button;
