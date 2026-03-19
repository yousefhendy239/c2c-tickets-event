import React from "react";
import heroBg from "../../../images/concert.png";
import { Search, MapPin, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="backgroundsection" style={{backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center", height: "80vh"}}>

      <h1 className="textimage1">Discover Amazing Events</h1>
      <h1 className="textimage2"> Near You</h1>

      <p className="text-gray-300 mt-4">
        Book tickets for the best concerts, sports, and festivals around the world.
      </p>
      <div className="event-finder">
        <div className="event-input">
          <Search className="icon" />
          <input type="text" placeholder="Search for events" className="event-input-words" />
        </div>
        <div className="event-input">
          <MapPin className="icon" />
          <input type="text" placeholder="Location" className="event-input-words" />
        </div>
        <div className="event-input">
          <Calendar className="icon" />
          <select className="dateselector">
            <option>All Dates</option>
            <option>Today</option>
            <option>Tomorrow</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
        </div>
        <div >
          <button className="search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}
