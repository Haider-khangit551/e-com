import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/ProvateRoute';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Protected Route */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
