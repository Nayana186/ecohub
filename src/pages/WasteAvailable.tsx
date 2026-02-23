import { useState } from "react";
import WasteCard from "../components/WasteCard";
import { availableStore } from "../data/store";

function WasteAvailable() {
  const [, setRefresh] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Waste Available for Pickup</h2>

      {availableStore.length === 0 && (
        <p>No waste available 🎉</p>
      )}

      {availableStore.map((waste) => (
        <WasteCard
          key={waste.id}
          waste={waste}
          refresh={() => setRefresh((v) => v + 1)}
        />
      ))}
    </div>
  );
}

export default WasteAvailable;
