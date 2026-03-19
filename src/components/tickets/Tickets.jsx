const TICKETS_DATA = [
  { id: 1, name: "Standard Pass", desc: "General Admission Access", price: 30 },
  { id: 2, name: "VIP Experience", desc: "Fast entry + Private bar", price: 80 },
  { id: 3, name: "Premium Backstage", desc: "Meet Artists", price: 150 },
];

function TicketCard({ ticket, selected, onSelect }) {
  return (
    <div onClick={() => onSelect(ticket)} style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "14px 16px", borderRadius: "12px",
      background: selected ? "rgba(168,85,247,0.12)" : "#0d0d1f",
      border: selected ? "1px solid #a855f7" : "1px solid rgba(255,255,255,0.06)",
      cursor: "pointer", transition: "all 0.25s ease", marginTop: "10px", gap: "12px",
      boxShadow: selected ? "0 0 18px rgba(168,85,247,0.18)" : "none",
    }}>
      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff", fontFamily: "'Syne', sans-serif" }}>
          {ticket.name}
        </p>
        <small style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>
          {ticket.desc}
        </small>
      </div>
      <span style={{ fontSize: "15px", fontWeight: 700, color: "#a855f7", fontFamily: "'Syne', sans-serif" }}>
        ${ticket.price}
      </span>
      <button onClick={(e) => { e.stopPropagation(); onSelect(ticket); }} style={{
        padding: "6px 14px", fontSize: "11px", border: "none", borderRadius: "8px",
        background: selected ? "#a855f7" : "rgba(168,85,247,0.25)",
        color: "white", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontWeight: 600,
      }}>
        {selected ? "Selected ✓" : "Select"}
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