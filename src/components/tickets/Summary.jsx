import { useState } from "react";
const FEES = 20;

export default function Summary({ selected }) {
  const [paid, setPaid] = useState(false);
  const total = selected ? selected.price + FEES : 0;

  function handlePay() {
    if (!selected) return alert("Please select a ticket first!");
    setPaid(true);
    setTimeout(() => setPaid(false), 3000);
  }

  return (
    <div style={{
      background: "#13132a", padding: "20px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)", marginBottom: "14px",
    }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", marginBottom: "16px" }}>Order Summary</h3>
      <div style={{
        background: "#0d0d1f", borderRadius: "10px", padding: "14px",
        marginBottom: "14px", border: "1px solid rgba(255,255,255,0.06)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>
            {selected ? selected.name : "No ticket selected"}
          </span>
          <span style={{ fontSize: "13px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>
            ${selected ? selected.price : 0}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>Service Fees</span>
          <span style={{ fontSize: "13px", color: "#fff", fontFamily: "'DM Sans', sans-serif" }}>${FEES}</span>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: "12px", paddingTop: "12px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "15px" }}>Total</span>
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "22px", color: "#a855f7" }}>
            ${total}
          </span>
        </div>
      </div>
      {paid ? (
        <div style={{
          textAlign: "center", padding: "14px", background: "rgba(34,197,94,0.15)",
          borderRadius: "12px", border: "1px solid rgba(34,197,94,0.4)",
        }}>
          <div style={{ fontSize: "24px", marginBottom: "4px" }}>🎉</div>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "14px", color: "#4ade80", fontWeight: 700 }}>
            Payment Successful!
          </p>
        </div>
      ) : (
        <button onClick={handlePay} style={{
          width: "100%", padding: "13px", border: "none", borderRadius: "12px",
          background: "linear-gradient(90deg, #7b2ff7, #f107a3)",
          color: "white", cursor: "pointer", fontFamily: "'Syne', sans-serif",
          fontSize: "14px", fontWeight: 700,
        }}>
          {selected ? "Proceed to Payment →" : "Select a Ticket"}
        </button>
      )}
    </div>
  );
}