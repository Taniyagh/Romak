import React from "react";
import "./TextInput.scss";

function TextInput({
  placeholder,
  value,
  handleChange,
  notValidUsernameMessage,
}) {
  return (
    <>
      <div className="text-input-component-holder">
        <input
          type="text"
          className="input-component"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        <p className="error-message-text-input">{notValidUsernameMessage}</p>
      </div>
    </>
  );
}

export default TextInput;
