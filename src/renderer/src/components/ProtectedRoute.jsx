import React from 'react';
import { Navigate } from 'react-router-dom';
import Header from './Header';

function ProtectedRoute({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  return <>
  <Header isLoggedIn={true}></Header>
  {children}
  </>
  
}

export default ProtectedRoute