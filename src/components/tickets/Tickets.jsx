import { Link } from "react-router-dom";
import { useState } from "react";

const TICKETS_DATA = [
  { id: 1, name: "General Admission", desc: "Access to all main stages and food courts", price: "85.00" },
  { id: 2, name: "VIP Experience", desc: "Front row access, private lounge, and 2 drink tickets.", price: "150.00" },
];

function TicketCard({ ticket, selected, onSelect }) {
  const [hovered, setHovered] = useState(false);

  const isActive = selected || hovered;

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 16px",
        borderRadius: "12px",
        background: isActive ? "rgba(168,85,247,0.12)" : "#0d0d1f",
        border: isActive
          ? "1px solid #a855f7"
          : "1px solid rgba(255,255,255,0.06)",
        cursor: "pointer",
        transition: "all 0.25s ease",
        marginTop: "10px",
        gap: "12px",
        boxShadow: isActive
          ? "0 0 18px rgba(168,85,247,0.18)"
          : "none",
        transform: hovered ? "scale(1.02)" : "scale(1)", 
      }}
    >
      <div style={{ flex: 1 }}>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          {ticket.name}
        </p>
        <small
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.45)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {ticket.desc}
        </small>
      </div>

      <span
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#a855f7",
        }}
      >
        ${ticket.price}
      </span>

      <button
        style={{
          padding: "6px 14px",
          fontSize: "11px",
          border: "none",
          borderRadius: "8px",
          background: isActive ? "#a855f7" : "rgba(168,85,247,0.25)",
          color: "white",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          transition: "0.25s",
        }}
      >
        <Link
          to="/tickets"
          className="link text-decoration-none"
          style={{ color: "#F3F4F6" }}
        >
          Booking
        </Link>
      </button>
    </div>
  );
}

export default function Tickets({ selected, onSelect }) {
  return (
    <div style={{
      background: "#13132a", padding: "20px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)", marginBottom: "14px",
    }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", marginBottom: "4px" }}>Select Tickets</h3>
      {TICKETS_DATA.map(t => (
        <TicketCard key={t.id} ticket={t} selected={selected?.id === t.id} onSelect={onSelect} />
      ))}
    </div>
  );
}

export { TICKETS_DATA };