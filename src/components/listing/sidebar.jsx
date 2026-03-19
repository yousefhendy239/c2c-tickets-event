import React from "react";
function Sidebar() {
  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div className="section">
        <p>Category</p>
        <label><input type="checkbox"/> Music Concerts</label>
        <label><input type="checkbox"/> Tech Conferences</label>
        <label><input type="checkbox"/> Art Exhibitions</label>
        <label><input type="checkbox"/> Sports & Fitness</label>
      </div>
      <div className="section">
        <p>Date</p>
        <div className="buttons">
          <button className="active">Today</button>
          <button>This Week</button>
          <button>Weekend</button>
          <button>Next Month</button>
        </div>
      </div>
      <div className="section">
        <p>Price Range</p>
        <input type="range" />
      </div>
      <button className="reset">Reset Filters</button>
    </div>
  );
}
export default Sidebar;