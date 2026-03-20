import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <h4 className="eventpass">EventPass</h4>

      <div className="links">
        <Link to="/" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Home</Link>

        <Link to="/checkoutpage" className="link text-decoration-none" style={{ color: '#F3F4F6' }}> Checkout</Link>

        <Link to="/tickets" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Booking</Link>
                <Link to="/Home" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>mohamed</Link>

      </div>
    </nav>
  );
}

export default Navbar;