let points = Number(localStorage.getItem("rewardPoints")) || 120;

export function getPoints() {
  return points;
}

export function redeemPoints(cost: number) {
  if (points >= cost) {
    points -= cost;
    localStorage.setItem("rewardPoints", points.toString());
    return true;
  }
  return false;
}
