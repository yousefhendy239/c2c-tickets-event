import React from "react";
export default function Footer() {
    return (
        <footer>
        <div class="footer-container">
            <div class="footer-col brand">
                <h3>🎟️ EventPass</h3>
                <p>Your one-stop destination for discovering and booking the most exciting events globally.</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Browse Events</a></li>
                    <li><a href="#">Venues</a></li>
                    <li><a href="#">Contact Support</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <span>🌐</span> <span>🐦</span> <span>📸</span>
                </div>
            </div>
        </div>
    </footer>

    );
}
