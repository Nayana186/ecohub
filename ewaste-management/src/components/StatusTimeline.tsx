type TimelineItem = {
  status: string;
  completed: boolean;
};

type Props = {
  timeline: TimelineItem[];
};

function StatusTimeline({ timeline }: Props) {
  return (
    <div style={{ marginTop: "10px" }}>
      {timeline.map((step, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: step.completed ? "green" : "#ccc",
              marginRight: "10px",
            }}
          />
          <span
            style={{
              color: step.completed ? "green" : "#555",
              fontWeight: step.completed ? "600" : "400",
            }}
          >
            {step.status}
          </span>
        </div>
      ))}
    </div>
  );
}

export default StatusTimeline;
