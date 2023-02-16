import React from 'react'
import '../styles/global.css'
import '../styles/CreateAccount.css'

const CreateAccount = () => {
  return (
    <div className="login">
      <div className="form-container">
        <h1 className="title">Create an Account</h1>
        <form action="/" className="form">
          <div>
              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" placeholder="John Walker" className="input input-name" />

              <label htmlFor="email" className="label">Email address</label>
              <input type="text" id="email" placeholder="example@example.com" className="input input-email" />

              <label htmlFor="password" className="label">Password</label>
              <input type="text" id="password" placeholder="*********" className="input input-password" />
          </div>
        <input type="submit" value="Create account" className="primary-button login-button" />
        
      </form>
    </div>
  </div>

  )
}

export default CreateAccount