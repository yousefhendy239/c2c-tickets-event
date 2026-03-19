import React from "react";
export default function Review() {
    return(
        <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="reviews-container">
            <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"Booking tickets has never been this easy. The countdown timer on my events page keeps me excited!"</p>
                <div className="user-info">
                    <div className="avatar"></div>
                    <div>
                        <h5>Sarah Jenkins</h5>
                        <p>Music Lover</p>
                    </div>
                </div>
            </div>
            <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"The festival recommendations are spot on. I found amazing concerts nearby that I wouldn't have known about otherwise."</p>
                <div className="user-info">
                    <div className="avatar"></div>
                    <div>
                        <h5>Mark Thompson</h5>
                        <p>Sports Fanatic</p>
                    </div>
                </div>
            </div>
            <div className="review-card">
                <div className="stars">★★★★★</div>
                <p className="quote">"Fast checkout process and great customer support. The digital tickets are very convenient for entry."</p>
                <div className="user-info">
                    <div className="avatar"></div>
                    <div>
                        <h5>Elena Rodriguez</h5>
                        <p>Tech Lead</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
