import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import AppLayout from './components/AppLayout';
import DashBoard from './pages/dashboard';

function App() {

  const [userDetails,setuserDetails]=useState(null);

  const updateUserDetails=(updatedUserDetails)=>{
    setuserDetails(updatedUserDetails);
  };


  return (
    <Routes>
      <Route path="/" element={<AppLayout userDetails={userDetails}/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        <Route path="login" element={ userDetails? <DashBoard/> :<Login  updateUserDetails={updateUserDetails}/>} />
        <Route path="dashboard" element={userDetails?<DashBoard/>:<Login updateUserDetails={updateUserDetails}/>}/>
      </Route>
    </Routes>
  );
}
 
export default App;
