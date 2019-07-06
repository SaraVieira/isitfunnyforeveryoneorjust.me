import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from './services/auth'

const Login = () => {
  const handleSubmit = () => handleLogin(user => navigate(`/profile`))

  return (
    <>
      <h1>Log in</h1>
      <button onClick={handleSubmit}>log in</button>
    </>
  )
}

export default Login
