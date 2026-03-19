import React from "react";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">EventPass</div>
      <div className="nav-links">
        <span>Home</span>
        <span className="active">Events</span>
        <span>Venues</span>
        <span>About</span>
      </div>
      <div className="nav-right">
        <input placeholder="Search events..." />
        <button className="signin">Sign In</button>
      </div>
    </div>
  );
}
export default Navbar;