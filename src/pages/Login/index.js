import React from "react";
import { useNavigate   } from 'react-router-dom'
import Button from "../../components/atoms/Button";

const Login = () => {

  const navigate = useNavigate();

  const HandleLogin = () => {
    localStorage.setItem('auth', true)
    navigate("/home");
  }

  return (
    <React.Fragment>
      <h1>Compass Login</h1>
      <Button onClick={HandleLogin}> login</Button>
    </React.Fragment>
  )
}

export default Login;