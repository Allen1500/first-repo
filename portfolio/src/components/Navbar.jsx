import React from 'react';

function Navbar() {
  return (
    <div className="navvy">
      <nav>
        <div className="nav-wrapper">
          <h1>skyVision</h1>
        </div>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/skills">Skills</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;