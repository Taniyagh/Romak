import React from 'react'
import PasswordInput from '../../Components/Common/Form/PasswordInput/PasswordInput';
import TextInput from '../../Components/Common/Form/TextInput/TextInput';
import '../../Styles/AuthPages/Auth.scss';
function Login() {

  return (
    <div className='login-component-page'>
      <div className='login-component-container'>
        <div className='login-component-logo-frame'>
          <img src='/assets/images/logo.png' alt='logo' className='login-component-logo'/>
        </div>
        <h3>شرکت روماک ارتباط پایدار </h3>
        <h4>ورود به حساب کاربری</h4>
        <div className='login-component-input-holder'>
            <TextInput placeholder='نام کاربری'/>
        </div>
        <div className='login-component-input-holder'>
            <PasswordInput placeholder='کلمه عبور'/>
        </div>
        <span>ورود</span>

      </div>
      
    </div>
  )
}

export default Login