import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import About from './About';

export default function AppLayout({userDetails}) {
  return (
    <>
      <Header userDetails={userDetails}/>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      <About/>
    </>
  );
}
