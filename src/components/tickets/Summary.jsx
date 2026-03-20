import { useState } from "react";

export default function Summary() {

  return (
    <div style={{
      background: "#13132a", padding: "20px", borderRadius: "14px",
      border: "1px solid rgba(168,85,247,0.2)", marginBottom: "14px",
      height: "350px",
    }}>
      <div>
      <h3 style={{color:"#a855f7"}}>About this event :</h3>
      <h6 style={{color:"#F3F4F6"}}>Get ready for the most electrifying night of the yearl Summer Beets Festival retume to Los Angeles for its 5th anniversary edition. Featuring a curated insup of world-renoemed Dis and rising pop stars, this year promises to be bigger, louder, and more Immersive than ever before.</h6>
      <br />
      <h6 style={{color:"#F3F4F6"}}>Experience state-of-the-art visual production, pyrotechnics, and three unique stages. Whether youre a hardcore electronic fan or just looking for a night to remember, Summer Beats has something for everyone.</h6>
    </div>
    </div>
  );
}

