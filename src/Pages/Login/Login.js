import React, { useState } from "react";
import SubmitButton from "../../Components/Common/Buttons/SubmitButton/SubmitButton";
import PasswordInput from "../../Components/Common/Form/PasswordInput/PasswordInput";
import TextInput from "../../Components/Common/Form/TextInput/TextInput";
import "../../Styles/AuthPages/Auth.scss";
import { onlyLettersAndDigitValidation } from "../../utils/helper";
import AxiosPost from "../../API/AxiosPost";
import { Axios_Route } from "../../API/AxiosRoutes";
import { login } from "../../utils/Auth";
import { useNavigate } from "react-router-dom";
import { URL_Route } from "../../setup";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [notValidUsernameMessage, setNotValidUsernameMessage] = useState("");
  const [notValidPasswordMessage, setnotValidPasswordMessage] = useState("");
  const [isLoading, setIsLoading]=useState(false);
  const navigate = useNavigate();

  const validateUsername = () => {
    if (username.length < 3) {
      setNotValidUsernameMessage("نام کاربری می بایست حداقل سه کاراکتر باشد.");
      return false;
    }
    return true;
  };
  const validatePassword = () => {
    const isValid = onlyLettersAndDigitValidation(password);
    if (!isValid) {
      setnotValidPasswordMessage(
        "کلمه عبور می بایست حداقل شامل یک حرف و یک عدد باشد."
      );
      return false;
    }
    if (password.length < 6) {
      setnotValidPasswordMessage("کلمه عبور باید حداقل 6 کاراکتر باشد.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    const validusername = validateUsername();
    const validpassword = validatePassword();

    if (validusername && validpassword) {
      console.log("pass", password);
      console.log("username", username);
      setIsLoading(true);
      AxiosPost(Axios_Route.postLogin, {
        username: username,
        password: password,
      }).then((data) => {
        setIsLoading(false)
        console.log(data);
        login(data.token);
        navigate(URL_Route.productsTable);
      });
    }
  };

  return (
      <div className="login-component-page">
        <div className="login-component-container">
          <div className="login-component-logo-frame">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="login-component-logo"
            />
          </div>
          <h3>شرکت روماک ارتباط پایدار </h3>
          <h4>ورود به حساب کاربری</h4>
          <div className="login-component-input-holder">
            <TextInput
              placeholder="نام کاربری"
              value={username}
              handleChange={(e) => setUserName(e.target.value)}
              notValidUsernameMessage={notValidUsernameMessage}
            />
          </div>
          <div className="login-component-input-holder">
            <PasswordInput
              password={password}
              handleChangePass={(e) => setPassword(e.target.value)}
              notValidPasswordMessage={notValidPasswordMessage}
            />
          </div>
          <div className="login-component-button-holder">
            <SubmitButton name="ورود" handleSubmit={handleSubmit} isLoading={isLoading}/>
          </div>
        </div>
      </div>
  );
}

export default Login;
