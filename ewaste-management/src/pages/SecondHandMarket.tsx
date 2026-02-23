import { secondHandItems } from "../data/secondHandItems";
import SecondHandCard from "../components/SecondHandCard";

function SecondHandMarket() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Second-Hand Electronics Marketplace</h2>
      <p>Affordable refurbished devices – reuse and reduce e-waste ♻️</p>

      {secondHandItems.map((item) => (
        <SecondHandCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default SecondHandMarket;
