import { redeemPoints } from "../data/rewardStore";

type Reward = {
  id: string;
  name: string;
  pointsRequired: number;
};

type Props = {
  reward: Reward;
  refresh: () => void;
};

function RewardCard({ reward, refresh }: Props) {
  const handleRedeem = () => {
    const success = redeemPoints(reward.pointsRequired);
    if (success) {
      alert("Reward redeemed successfully 🎉");
      refresh();
    } else {
      alert("Not enough points 😕");
    }
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
      <h3>{reward.name}</h3>
      <p>Points Required: {reward.pointsRequired}</p>

      <button onClick={handleRedeem}>
        Redeem
      </button>
    </div>
  );
}

export default RewardCard;
