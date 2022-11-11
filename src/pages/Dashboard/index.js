import React from "react";
import { useNavigate   } from 'react-router-dom'
import Button from "../../components/atoms/Button";

const Dashboard = () => {

  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.clear()
    navigate("/");
  }

  return ( 
    <React.Fragment>
      <h1>Dashboard</h1>
      <Button onClick={HandleLogout}> Logout </Button>
    </React.Fragment>
  )
}

export default Dashboard;