export default function Map() {
  return (
    <div style={{
      background: "#13132a", padding: "20px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)",
    }}>
      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", marginBottom: "12px" }}>Venue Location</h3>
      <a href="https://www.google.com/maps?q=Grand+Olympic+Stadium+Los+Angeles" target="_blank" rel="noreferrer">
        <div style={{
          width: "100%", height: "160px", borderRadius: "12px",
          background: "linear-gradient(135deg, #1a1a3e, #0d2b4e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          border: "1px solid rgba(168,85,247,0.2)", cursor: "pointer",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "32px", marginBottom: "8px" }}>📍</div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>
              Grand Olympic Stadium, Los Angeles
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#a855f7", marginTop: "4px" }}>
              Click to open in Google Maps →
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}