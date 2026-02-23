import React, { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { useUser } from "../AuthProvider";
import { QRCodeCanvas } from "qrcode.react";

type Reward = {
  id: string;
  name: string;
  creditsRequired: number;
};

const rewardsCatalog: Reward[] = [
  { id: "amazon50", name: "₹50 Amazon Voucher", creditsRequired: 10 },
  { id: "gift200", name: "₹200 Gift Card", creditsRequired: 40 },
  { id: "ecohub-merch", name: "EcoHub Merchandise", creditsRequired: 25 },
];

const EcoHubRedeem = () => {
  const { user } = useUser();
  const [credits, setCredits] = useState(0);
  const [redeemedRewards, setRedeemedRewards] = useState<any[]>([]);
  const [lastRedeemed, setLastRedeemed] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);

      if (snap.exists()) {
        const data = snap.data();
        setCredits(data.credits || 0);
        setRedeemedRewards(data.redeemedRewards || []);
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  const handleRedeem = async (reward: Reward) => {
    if (!user) return;

    if (credits < reward.creditsRequired) {
      alert("Not enough credits!");
      return;
    }

    const alreadyRedeemed = redeemedRewards.some(
      (r) => r.rewardId === reward.id
    );
    if (alreadyRedeemed) {
      alert("Reward already redeemed!");
      return;
    }

    const qrValue = `${user.uid}-${reward.id}-${Date.now()}`;
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      credits: credits - reward.creditsRequired,
      redeemedRewards: arrayUnion({
        rewardId: reward.id,
        name: reward.name,
        redeemedAt: new Date(),
        qrValue,
      }),
    });

    setCredits((prev) => prev - reward.creditsRequired);
    setRedeemedRewards((prev) => [
      ...prev,
      { rewardId: reward.id, qrValue },
    ]);
    setLastRedeemed({ ...reward, qrValue });
  };

  if (!user) {
    return <p style={{ padding: 30 }}>Please log in to redeem rewards.</p>;
  }

  if (loading) {
    return <p style={{ padding: 30 }}>Loading rewards...</p>;
  }

  return (
    <div style={{ padding: 30, maxWidth: 600 }}>
      <h1>🎁 EcoHub Rewards</h1>
      <p>
        Available Credits: <strong>{credits}</strong>
      </p>

      <h2>Redeem Rewards</h2>
      <ul>
        {rewardsCatalog.map((reward) => {
          const redeemed = redeemedRewards.some(
            (r) => r.rewardId === reward.id
          );

          return (
            <li key={reward.id} style={{ marginBottom: 12 }}>
              {reward.name} — {reward.creditsRequired} credits
              <button
                style={{ marginLeft: 12 }}
                disabled={credits < reward.creditsRequired || redeemed}
                onClick={() => handleRedeem(reward)}
              >
                {redeemed ? "Redeemed" : "Redeem"}
              </button>
            </li>
          );
        })}
      </ul>

      {lastRedeemed && (
        <div style={{ marginTop: 30, textAlign: "center" }}>
          <h3>✅ Redeemed: {lastRedeemed.name}</h3>
          <QRCodeCanvas value={lastRedeemed.qrValue} size={160} />
          <p>Scan this QR to claim your reward</p>
        </div>
      )}
    </div>
  );
};

export default EcoHubRedeem;