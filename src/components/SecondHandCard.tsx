type Item = {
  id: string;
  name: string;
  condition: string;
  price: number;
  warranty: string;
};

function SecondHandCard({ item }: { item: Item }) {
  const handleOrder = () => {
    alert(`Order placed for ${item.name} ✅`);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "12px",
      }}
    >
      <h3>{item.name}</h3>
      <p><strong>Condition:</strong> {item.condition}</p>
      <p><strong>Price:</strong> ₹{item.price}</p>
      <p><strong>Warranty:</strong> {item.warranty}</p>

      <button onClick={handleOrder}>
        Order Now
      </button>
    </div>
  );
}

export default SecondHandCard;
