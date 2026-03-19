export default function Gallery({ onOpen }) {
  return (
    <div style={{
      background: "#13132a", padding: "20px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)",
    }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", marginBottom: "14px" }}>Past Events</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>

        <img src="/standard.jpeg" onClick={() => onOpen("/standard.jpeg")} style={{
          width: "100%", height: "140px", objectFit: "cover",
          borderRadius: "12px", cursor: "pointer", transition: "transform 0.25s",
          gridColumn: "1", gridRow: "1",
        }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />

        <img src="/vip.jpeg" onClick={() => onOpen("/vip.jpeg")} style={{
          width: "100%", height: "110px", objectFit: "cover",
          borderRadius: "12px", cursor: "pointer", transition: "transform 0.25s",
        }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />

        <img src="/premium.jpeg" onClick={() => onOpen("/premium.jpeg")} style={{
          width: "100%", height: "110px", objectFit: "cover",
          borderRadius: "12px", cursor: "pointer", transition: "transform 0.25s",
        }}
          onMouseEnter={e => e.target.style.transform = "scale(1.04)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}
        />

        <div onClick={() => onOpen("/other.jpeg")} style={{
          height: "110px", borderRadius: "12px",
          background: "linear-gradient(135deg,#1a0a2e,#0a1a3e)",
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", cursor: "pointer",
          border: "1px dashed rgba(168,85,247,0.3)", position: "relative",
          overflow: "hidden",
        }}>
          <img src="/other.jpeg" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", opacity: 0.4,
          }} />
          <span style={{
            position: "relative", fontSize: "26px", fontWeight: 800,
            fontFamily: "'Syne', sans-serif", color: "#fff",
          }}>+12</span>
          <span style={{
            position: "relative", fontSize: "11px",
            color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif",
          }}>more events</span>
        </div>

      </div>
    </div>
  );
}