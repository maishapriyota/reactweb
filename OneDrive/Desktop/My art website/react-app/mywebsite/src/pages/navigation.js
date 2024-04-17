import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* Use Link component for Contact link */}
        <li><Link to="/chatbot">Contact</Link></li>
        <li><Link to="/project">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
