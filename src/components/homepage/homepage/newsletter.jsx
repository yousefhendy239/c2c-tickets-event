import React from "react";

export default function Newsletter() {
    return (
        <section className="newsletter">
            <div className="newsletter-box">
                <h2>Don't Miss the Next Big Event</h2>
                <p>
                    Join 50,000+ event enthusiasts and get early access to ticket sales
                    and exclusive discounts.
                </p>

                <div className="subscribe-form">
                    <input type="email" placeholder="Enter your email" />
                    <button className="btn-light">Subscribe Now</button>
                </div>
            </div>
        </section>
    );
}