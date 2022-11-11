import React from "react";
import { useNavigate   } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.clear()
    navigate("/");
  }

  return ( 
    <React.Fragment>
      <h1>Dashboard</h1>
      <button onClick={HandleLogout}> Logout </button>
    </React.Fragment>
  )
}

export default Dashboard;