export default function Navbar() {
  return (
    <header style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "18px 60px", background: "rgba(13,13,30,0.95)",
      backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(168,85,247,0.15)",
      position: "sticky", top: 0, zIndex: 100,
    }}>
      <div style={{
        color: "#a855f7", fontWeight: 800, fontSize: "20px",
        fontFamily: "'Syne', sans-serif",
      }}>
        Event<span style={{ color: "#f107a3" }}>Pass</span>
      </div>
      <nav style={{ display: "flex", gap: "30px" }}>
        {["Events", "Venues", "My Tickets"].map(item => (
          <a key={item} href="#" style={{
            color: "rgba(255,255,255,0.6)", textDecoration: "none",
            fontSize: "13px", fontFamily: "'DM Sans', sans-serif",
          }}>{item}</a>
        ))}
      </nav>
    </header>
  );
}