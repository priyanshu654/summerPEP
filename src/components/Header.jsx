import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({userDetails}) {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
      {!userDetails?<Link to="/login">Login</Link>:""}

    </nav>
  );
}
