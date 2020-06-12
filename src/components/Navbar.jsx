import React, { useState } from 'react';
import useDark from '../hooks/useDark'

const Navbar = () => {
  const [darkMode, toggleMode] = useDark('darkMode', false);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
