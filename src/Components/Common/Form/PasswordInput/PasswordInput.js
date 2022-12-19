import React from "react";
import './PasswordInput.scss';
function PasswordInput({ type, showPass, src }) {
  return (
    <>
      <input type="password" name="password" placeholder='کلمه عبور' className="password-input-component"/>
      <img src={src}/>
    </>
  );
}

export default PasswordInput;
