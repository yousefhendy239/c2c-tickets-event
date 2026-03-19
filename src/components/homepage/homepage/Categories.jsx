import React from "react";
import { Link } from "react-router-dom";
export default function Categories() {
    return (
        <div className="categories">
            <div className="categories-header">
                <h2 className="h2categories">Event Categories</h2>
                <button className="button-categories"><Link to="/Listing" className="link text-decoration-none" style={{ color: '#F3F4F6' }}>View All</Link></button>
            </div>
            <ul className="categories-list">
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-solid fa-music"></i></div> <h6>concerts</h6> </li></button>
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-regular fa-futbol"></i></div> <h6>Sports</h6></li></button>
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-solid fa-masks-theater"></i></div> <h6>Theater</h6></li></button>
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-solid fa-mask"></i></div> <h6>Festivals</h6></li></button>
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-solid fa-people-group"></i></div> <h6>Conferences</h6></li></button>
                <button className="button-icon"><li className="icons"><div className="icon-circle"><i class="fa-solid fa-pen"></i></div> <h6>Workshops</h6></li></button>
            </ul>
        </div>
    );
}
