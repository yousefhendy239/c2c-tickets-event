import { useState, useEffect } from "react";
import ticketsImg from "../assets/images/tickets_img.jpg";

function OrderSummary() {

  const [tickets] = useState(2);
  const [price] = useState(75);
  const [serviceFee] = useState(12.5);
  const [tax] = useState(8);

  const [total, setTotal] = useState(0);
  const [paid, setPaid] = useState(false); // 👈 هنا الصح

  useEffect(() => {
    const ticketTotal = tickets * price;
    const newTotal = ticketTotal + serviceFee + tax;
    setTotal(newTotal);
  }, [tickets, price, serviceFee, tax]);

  return (
    <div className="order-summary">

      <h4>Order Summary</h4>

      <div className="event-info">
        <img src={ticketsImg} alt="event" />
        <div>
          <h5>Neon Nights: Summer Festival</h5>

          <p>
            <span className="material-symbols-outlined">calendar_today</span>
            Aug 24, 2024 <span className="dot">•</span> 8:00 PM
          </p>

          <p>
            <span className="material-symbols-outlined">location_on</span>
            Skyline Arena, New York
          </p>
        </div>
      </div>

      <div className="price-info">
        <div className="price-row">
          <span className="label">{tickets}x General Admission</span>
          <span className="value">${(tickets * price).toFixed(2)}</span>
        </div>

        <div className="price-row">
          <span className="label">Service Fee</span>
          <span className="value">${serviceFee.toFixed(2)}</span>
        </div>

        <div className="price-row">
          <span className="label">Tax</span>
          <span className="value">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="total">
        <span className="total-label">Total Amount</span>
        <span className="total-value">${total.toFixed(2)}</span>
      </div>

      <div className="promo">
        <input placeholder="Promo code" />
        <button>Apply</button>
      </div>


      <button
        className="confirm"
        onClick={() => setPaid(true)}
      >
        <span className="material-symbols-outlined">lock</span>
        Confirm Payment
      </button>

      <p className="terms">
        BY CLICKING CONFIRM BUTTON, YOU AGREE TO OUR TERMS OF SERVICE AND PRIVACY POLICY. ALL SALES ARE FINAL.
      </p>

      {/* الرسالة */}
      {paid && (
        <div style={{
          background:"linear-gradient(90deg,#7b2cff,#b26cff)",
          marginTop: "15px",
          padding: "12px",
          borderRadius: "10px",
          color: "#F3F4F6",
          fontWeight: "600",
          textAlign: "center",
          transition: "0.3s"
        }}>
          ✅ Payment Complete
        </div>
      )}
    </div>
  );
}

export default OrderSummary;