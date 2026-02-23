import { markAsPickedUp } from "../data/store";

type Waste = {
  id: string;
  item: string;
  quantity: string;
  location: string;
  pickupDate: string;
  status: string;
};

type Props = {
  waste: Waste;
  refresh: () => void;
};

function WasteCard({ waste, refresh }: Props) {
  const handlePickup = () => {
    markAsPickedUp(waste.id);
    refresh();
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "12px",
      }}
    >
      <h3>{waste.item}</h3>
      <p><strong>Quantity:</strong> {waste.quantity}</p>
      <p><strong>Location:</strong> {waste.location}</p>
      <p><strong>Pickup Date:</strong> {waste.pickupDate}</p>

      <button
        onClick={handlePickup}
        style={{ marginTop: "10px", cursor: "pointer" }}
      >
        Mark as Picked Up
      </button>
    </div>
  );
}

export default WasteCard;
