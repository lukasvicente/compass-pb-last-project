import React from "react";
import { useNavigate   } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate();

  const HandleLogin = () => {
    localStorage.setItem('auth', true)
    navigate("/home");
  }

  return (
    <React.Fragment>
      <h1>Compass Login</h1>
      <button onClick={HandleLogin}> login</button>
    </React.Fragment>
  )
}

export default Login;