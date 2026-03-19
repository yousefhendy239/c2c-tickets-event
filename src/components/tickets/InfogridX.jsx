function InfoBox({ label, line1, line2 }) {
  return (
    <div style={{
      background: "#13132a", padding: "16px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)",
    }}>
      <h4 style={{
        color: "#a855f7", fontSize: "10px", letterSpacing: "1.5px",
        fontFamily: "'Syne', sans-serif", marginBottom: "8px", textTransform: "uppercase",
      }}>{label}</h4>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}>{line1}</p>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans', sans-serif", marginTop: "2px" }}>{line2}</p>
    </div>
  );
}

export default function InfogridX() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
      <InfoBox label="Date & Time" line1="Sat, Oct 12, 2024" line2="6:00 PM – 12:00 AM" />
      <InfoBox label="Venue" line1="Grand Olympic Stadium" line2="Los Angeles, CA" />
      <InfoBox label="Organizer" line1="Global Events Co." line2="✓ Verified Producer" />
      <InfoBox label="Category" line1="Music & Nightlife" line2="Electronic & Pop" />
    </div>
  );
}