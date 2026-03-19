// import React from "react";
import concertImg from "../../../images/concert.png";
import concertImg1 from "../../../images/hero-bg.jpg";
import concertImg2 from "../../../images/image 3.png";
import concertImg3 from "../../../images/image 4.png";
import concertImg4 from "../../../images/image 5.png";
import concertImg5 from "../../../images/image 6.png";
import concertImg6 from "../../../images/image1.png";
import concertImg7 from "../../../images/image2.png";

import React, { useState } from "react";
export default function Events() {
const [index, setIndex] = useState(0);
const visibleCards = 4;
const nextSlide = () => {
    if (index < events.length - visibleCards) {
        setIndex(index + 1);
    }
};

const prevSlide = () => {
    if (index > 0) {
        setIndex(index - 1);
    }
};
const events = [
    {
        title: "Summer Beats Festival",
        location: "Los Angeles, CA",
        price: "$45.00",
        img: concertImg,
    },
    {
        title: "Championship Finals",
        location: "New York, NY",
        price: "$120.00",
        img: concertImg1,
    },
    {
        title: "Neon Night Theater",
        location: "London, UK",
        price: "$65.00",
        img: concertImg2,
    },
    {
        title: "Global Tech Conf",
        location: "San Francisco, CA",
        price: "$200.00",
        img: concertImg3,
    },
    {
        title: "Global Tech Conf",
        location: "San Francisco, CA",
        price: "$200.00",
        img: concertImg4,
    },
    {
        title: "Global Tech Conf",
        location: "San Francisco, CA",
        price: "$200.00",
        img: concertImg5,
    },
    {
        title: "Global Tech Conf",
        location: "San Francisco, CA",
        price: "$200.00",
        img: concertImg6,
    },
    {
        title: "Global Tech Conf",
        location: "San Francisco, CA",
        price: "$200.00",
        img: concertImg7,
    },
    ];
    return (
        <div className="events">
            
            <div className="title">
                <div className="title-name">
                    <h2>Featured Events</h2>
                    <h6>handpicked experiences for you</h6>
                </div>
                <div className="arows">
                    <div className="circle-arow"><button onClick={prevSlide} className="arow"><i class="fa-solid fa-chevron-left"></i></button></div>
                    <div className="circle-arow"><button onClick={nextSlide} className="arow"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
            </div>
            <div className="events-cards">
                <div className="slider-wrapper">
                <div className="slider-container" style={{ transform: `translateX(-${index * 25}%)` }}>
                    {events.map((event, i) => (
                    <div key={i} className="card" >
                        <img  src={event.img} alt="" className="h-44 w-full object-cover"/>
                        <div className="p-4 ">
                            <h4 className="card-name">{event.title}</h4>
                            <p className="card-name"><i class="fa-solid fa-location-dot"></i> {event.location}</p>

                            <div className="flex justify-between items-center mt-4">
                                <div>
                                    <h6 className="start-at">Start At</h6>
                                    <span className="text-purple-400 font-bold">{event.price}</span>
                                </div>

                                <button className="buy-ticket">Buy Ticket</button>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    );
}
