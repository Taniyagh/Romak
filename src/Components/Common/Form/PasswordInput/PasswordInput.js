import React, { useState } from "react";
import "./PasswordInput.scss";

function PasswordInput({
  password,
  handleChangePass,
  notValidPasswordMessage,
}) {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="input-component-frame">
        <div className="input-component-holder">
          <input
            type={showPass ? "text" : "password"}
            placeholder="کلمه عبور"
            value={password}
            onChange={handleChangePass}
            className="password-input-component"
          />
          <img
            src={
              showPass
                ? "assets/images/show-pass.jpg"
                : "assets/images/hide-pass.jpg"
            }
            alt="showPassword"
            onClick={() => setShowPass(!showPass)}
            className="show-password-icon"
          />
        </div>
        <p className="error-message-password-input">
          {notValidPasswordMessage}
        </p>
      </div>
    </>
  );
}

export default PasswordInput;
