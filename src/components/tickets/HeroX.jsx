import bg from "../../assets/images/background.jpeg";

export default function HeroX() {
  return (
    <div
      style={{
        margin: "30px auto",
        width: "90%",
        height: "220px",
        background: `url(${bg}) center/cover`,
        borderRadius: "20px",
        display: "flex",
        alignItems: "flex-end",
        padding: "28px 32px",
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(168,85,247,0.25)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,10,24,0.9) 0%, transparent 60%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(168,85,247,0.2)",
            border: "1px solid rgba(168,85,247,0.4)",
            borderRadius: "20px",
            padding: "4px 12px",
            fontSize: "11px",
            color: "#c084fc",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "10px",
          }}
        >
          🎵 Music & Nightlife
        </span>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "36px",
            fontWeight: 800,
            background: "linear-gradient(90deg, #fff 0%, #c084fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Summer Beats Festival 2024
        </h1>
      </div>
    </div>
  );
}