import React from "react";
import './TextInput.scss';

function TextInput({placeholder}) {
  return (
    <>
      <input type="text" className="input-component" placeholder={placeholder} />
    </>
  );
}

export default TextInput;
