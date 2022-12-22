import React from "react";
import "./SubmitButton.scss";
import ReactLoading from "react-loading";

function SubmitButton({ handleSubmit, name, isLoading }) {
  return (
    <span onClick={handleSubmit} className="button-component">
      {isLoading ? (
        <ReactLoading
          type="spin"
          color="white"
          style={{ height: "20px", width: "20px", color: "white" }}
        />
      ) : (
        name
      )}
    </span>
  );
}

export default SubmitButton;
