import React from 'react';
import { Routes, Route, Navigate, Outlet  } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';


function ProtectedRoutes() {
  const fakeAuthorization = localStorage.getItem('auth') === 'true' ? true : false;

  if (fakeAuthorization !== true) {
    return <Navigate to={'/'} replace />;
  }

  return <Outlet />;
}

const Routers = () => {

  return(
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes  />
          }
        >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
    
  )
 
}

export default Routers;