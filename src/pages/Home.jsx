import { useState } from "react";
import Navbar from "../components/tickets/Navbar";
import HeroX from "../components/tickets/HeroX";
import InfogridX from "../components/tickets/InfogridX";
import Tickets from "../components/tickets/Tickets";
import Map from "../components/tickets/Map";
import Summary from "../components/tickets/Summary";
import Gallery from "../components/tickets/Gallery";

export default function Home() {
  const [selected, setSelected] = useState(null);
  const [popup, setPopup] = useState(null);

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a18", color: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
      `}</style>

      <Navbar />
      <HeroX />

      <div style={{ display: "flex", gap: "18px", width: "90%", margin: "0 auto 40px" }}>
        <div style={{ flex: 2 }}>
          <InfogridX />
          <Tickets selected={selected} onSelect={setSelected} />
          <Map />
        </div>
        <div style={{ flex: 1 }}>
          <Summary selected={selected} />
          <Gallery onOpen={(src) => setPopup(src)} />
        </div>
      </div>

      {popup && (
        <div onClick={() => setPopup(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)",
          display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999,
        }}>
          <img src={popup} style={{
            width: "60%", maxWidth: "800px", borderRadius: "20px",
            boxShadow: "0 0 60px rgba(168,85,247,0.3)",
          }} />
        </div>
      )}
    </div>
  );
}

