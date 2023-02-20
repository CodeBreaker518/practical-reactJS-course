import React from 'react';
import '../styles/PasswordRecovery.css'
import '../styles/global.css'

const PasswordRecovery = () => {
  return (
    <>
      <div className="login">
        <div className="form-container">
          <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
          <h1 className="title">Email has been sent!</h1>
          <p className="subtitle">Pleas check your inbox for instructions on how to reset the password</p>
          <div className="email-img">
            <img src="./icons/email.svg" alt="email" />
          </div>
          <a className="login-btn" href="/login">
            <button className="primary-button login-button">Login</button>
          </a>
          <p className="resend">
            <span>Didn't receive the email?</span>
            <a href="/">Resend</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default PasswordRecovery;