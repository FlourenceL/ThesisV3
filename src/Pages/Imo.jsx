import React from "react";
import "@dotlottie/player-component";

function Imo() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end", // Use 'flex-end' to align to the right
        alignItems: "center",
        height: "90vh",
      }}
    >
      <dotlottie-player
        className="Imo"
        src="https://lottie.host/ad2bca8d-7994-4b59-ba5e-768e4ddee51b/MGSYf25Ffs.json"
        background="transparent"
        speed="0.75"
        style={{ width: "600px", height: "600px" }}
        loop
        autoplay
      />
    </div>
  );
}

export default Imo;
