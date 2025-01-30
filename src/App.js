// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignupForm";
import EmployeeList from "./Components/EmployeeList";
import Sidebar from './Components/Sidebar'; // Add Sidebar component
import TopNavbar from './Components/TopNavbar'; // Add TopNavbar component
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar - Fixed on the left, using col-3 */}
        <Sidebar />

        {/* Main Content */}
        <div className="main-content">
          {/* Top Navbar - Fixed on top, using col-9 */}
          <TopNavbar />

          <div className="container mt-4">
            {/* Routing for different pages */}
            <Routes>
              <Route path="/" element={<EmployeeList />} />
              <Route path="/signup" element={<SignupForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
