import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="Navbar">
            <div><h4 className="eventpass">EventPass</h4></div>

            <div className="links">
                <Link to="/" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Home</Link>
                <Link to="/Listing" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Events</Link>

                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Sign in</a>
                <a href="#" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>Profile</a>
                
            </div>

            <div>
            <nav className="navbar">
                <div className="container-fluid">
                    <form className="d-flex" role="search">
                        <input className="serachbar form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="search btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            </div>
            
        </nav>
        
    );
}
