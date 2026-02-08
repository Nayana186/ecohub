import { useState } from "react";
import { trackerStore } from "../data/store";
import StatusTimeline from "../components/StatusTimeline";

function EwasteTrackerSetup() {
  const [, forceUpdate] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>E-Waste Tracker</h2>
      <p>Track your registered e-waste pickup</p>

      {trackerStore.length === 0 && (
        <p>No tracked waste yet.</p>
      )}

      {trackerStore.map((waste) => (
        <div
          key={waste.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginTop: "15px",
          }}
        >
          <h3>{waste.item}</h3>

          <p><strong>Pickup Date:</strong> {waste.pickupDate}</p>
          <p><strong>Pickup Location:</strong> {waste.pickupLocation}</p>
          <p><strong>Picked By:</strong> {waste.pickedBy}</p>

          <h4>Status Timeline</h4>
          <StatusTimeline timeline={waste.statusTimeline} />

          <p style={{ marginTop: "10px" }}>
            <strong>Current Location:</strong> {waste.currentLocation}
          </p>
        </div>
      ))}

      {/* Hidden refresh trigger (for now) */}
      <button
        onClick={() => forceUpdate((v) => v + 1)}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default EwasteTrackerSetup;
