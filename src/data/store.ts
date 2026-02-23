import { trackerData as initialTracker } from "./trackerData";
import { availableWaste as initialAvailable } from "./availableWaste";

export let trackerStore = [...initialTracker];
export let availableStore = [...initialAvailable];

export function markAsPickedUp(id: string) {
  const index = availableStore.findIndex((w) => w.id === id);
  if (index === -1) return;

  const pickedWaste = availableStore[index];

  // Remove from available
  availableStore.splice(index, 1);

  // Add to tracker
  trackerStore.push({
    id: pickedWaste.id,
    item: pickedWaste.item,
    pickupDate: pickedWaste.pickupDate,
    pickupLocation: pickedWaste.location,
    pickedBy: "Assigned Collector",
    currentLocation: "In Transit",

    statusTimeline: [
      { status: "Requested", completed: true },
      { status: "Picked Up", completed: true },
      { status: "In Transit", completed: false },
      { status: "At Recycling Center", completed: false },
      { status: "Recycled", completed: false },
    ],
  });
}
