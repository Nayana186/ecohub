import { useState } from "react";
import { rewards } from "../data/rewards";
import { getPoints } from "../data/rewardStore";
import RewardCard from "../components/RewardCard";

function Rewards() {
  const [, setRefresh] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redeem Rewards</h2>
      <p>
        <strong>Your Points:</strong> {getPoints()}
      </p>

      {rewards.map((reward) => (
        <RewardCard
          key={reward.id}
          reward={reward}
          refresh={() => setRefresh((v) => v + 1)}
        />
      ))}
    </div>
  );
}

export default Rewards;
