import React from "react";

type Item = {
  id: number;
  name: string;
  price: number;
  creditCost: number;
  condition: string;
  seller: string;
};

type Props = {
  user: { name: string; email: string; credits: number };
  setUser: React.Dispatch<React.SetStateAction<{ name: string; email: string; credits: number }>>;
  cart: Item[];
  setCart: React.Dispatch<React.SetStateAction<Item[]>>;
};

// Mock items
const items: Item[] = [
  { id: 1, name: "Refurbished Laptop", price: 18000, creditCost: 120, condition: "Good", seller: "Eco Renew Store" },
  { id: 2, name: "Used Smartphone", price: 7000, creditCost: 60, condition: "Fair", seller: "SecondLife Mobiles" },
  { id: 3, name: "Old Tablet", price: 4000, creditCost: 40, condition: "Fair", seller: "TechResale" }
];

const SecondHandDemo: React.FC<Props> = ({ user, setUser, cart, setCart }) => {
  const addToCart = (item: Item) => setCart([...cart, item]);

  const redeemCredits = (item: Item) => {
    if (user.credits >= item.creditCost) {
      setUser({ ...user, credits: user.credits - item.creditCost });
      alert(`Redeemed ${item.creditCost} credits for ${item.name}`);
    } else {
      alert("Not enough credits!");
    }
  };

  const buyNow = (item: Item) => {
    alert(`Purchased ${item.name} for ₹${item.price}`);
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>♻️ Second-Hand Store</h2>
      <p>🪙 Your Credits: {user.credits}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {items.map(item => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 10,
              background: "#fff",
              width: 250,
            color:"#000",
            }}
          >
            <h3 style={{ color: "#2e7d32" }}>{item.name}</h3>
            <p>💰 Price: ₹{item.price} | 🪙 Credits: {item.creditCost}</p>
            <p>📦 Condition: {item.condition}</p>
            <p>🏪 Seller: {item.seller}</p>

            <div style={{ marginTop: 12 }}>
              <button style={{ marginRight: 8 }} onClick={() => addToCart(item)}>🛒 Add to Cart</button>
              <button
                style={{ marginRight: 8, opacity: user.credits >= item.creditCost ? 1 : 0.5 }}
                disabled={user.credits < item.creditCost}
                onClick={() => redeemCredits(item)}
              >
                🪙 Redeem Credits
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 24 }}>🛒 Cart ({cart.length})</h3>
      {cart.length === 0 && <p>No items in cart.</p>}
      <ul>
        {cart.map((item, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            {item.name} - ₹{item.price}{" "}
            <button onClick={() => buyNow(item)} style={{ marginLeft: 8 }}>💳 Buy Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondHandDemo;