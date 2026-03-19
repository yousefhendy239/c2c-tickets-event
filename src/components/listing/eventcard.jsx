import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image 3.png";
import img4 from "../assets/image 4.png";
import img5 from "../assets/image 5.png";
import img6 from "../assets/image 6.png";

const events = [
  { title: "Neon Midnight", category: "MUSIC", price: "$120.00", rating: "4.9", date: "Oct 14, 2024 · 10:00 PM", location: "Brooklyn Mirage, NY", image: img1, },
  { title: "Global AI Summit", category: "TECH", price: "$299.00", rating: "4.7", date: "Nov 05, 2024 · 09:00 AM", location: "Convention Center, SF", image:img2, },
  { title: "Abstract Visions", category: "ART", price: "Free", rating: "4.8", date: "Dec 12, 2024 · 06:00 PM", location: "The Met, NY",image:img3, },
  { title: "Downtown Classic", category: "SPORTS", price: "$85.00", rating: "4.6", date: "Oct 28, 2024 · 02:00 PM", location: "Staples Center, LA", image:img4 },
  { title: "Urban Eats & Beats", category: "FESTIVAL", price: "$45.00", rating: "4.6", date: "Nov 12, 2024 · 12:00 PM", location: "Zilker Park, Austin", image: img5 },
  { title: "Sunrise Wellness", category: "HEALTH", price: "$50.00", rating: "5.0", date: "Dec 01, 2024 · 07:00 AM", location: "Sedona Hills, AZ", image: img6 },
];

function EventCard() {
  return (
    <div className="cardholder">
      {events.map((event, index) => (
        <div className="card" key={index}>
          <img src={event.image} alt="" />
          
          <div className="card-body">
            <div className="top-row">
              <span className="badge">{event.category}</span>
              <span className="price">{event.price}</span>
            </div>

            <h3>{event.title}</h3>
            <p className="rating">⭐ {event.rating}</p>
            <p className="meta">{event.date}</p>
            <p className="meta">{event.location}</p>

            <button className="buy">Buy Ticket</button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default EventCard;