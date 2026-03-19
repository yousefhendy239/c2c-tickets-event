import React from "react";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <h4 className="eventpass">EventPass</h4>

            <div className="links">
                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Browse</a>
                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Events</a>
                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Promotions</a>
                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>My Tickets</a>
            </div>

            
            <nav className="navbar">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="serachbar form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="search btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
            
        </nav>
        
    );
}
