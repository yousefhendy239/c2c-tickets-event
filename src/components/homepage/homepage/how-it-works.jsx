import React from "react";
export default function Works() {
    return (
        <div className="works">
            <h2 className="works-word">How It Works</h2>
            <div className="works-steps">
                <div className="step">
                    <div className="circle-for-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <h3>Browse</h3>
                    <h6>discover events across various categories and locations</h6>
                </div>
                <div className="step">
                    <div className="circle-for-icon"><i class="fa-solid fa-check"></i></div>
                    <h3>Choose</h3>
                    <h6>select your preferred seats and pay online</h6>
                </div>
                <div className="step">
                    <div className="circle-for-icon"><i class="fa-solid fa-face-grin-stars"></i></div>
                    <h3>Enjoy</h3>
                    <h6>receive your digital ticket and have a great time</h6>
                </div>
            </div>
        </div>
    );
}

