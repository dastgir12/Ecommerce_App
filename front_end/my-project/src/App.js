import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Login } from './components';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

    if (!User) navigate('/login');
  }, []);

  return (
    <GoogleOAuthProvider clientId='569563641599-7323a8oc5g4n4dk0f9l54ema0c36nfh5.apps.googleusercontent.com'>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </GoogleOAuthProvider>
  );
};

export default App;
