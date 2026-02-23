type KPICardProps = {
  title: string;
  value: string;
};

const KPICard = ({ title, value }: KPICardProps) => {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
        minHeight: "110px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <p
        style={{
          fontSize: "14px",
          color: "#666",
          marginBottom: "6px"
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: "28px",
          fontWeight: 600,
          color: "#111",
          margin: 0
        }}
      >
        {value}
      </h2>
    </div>
  );
};

export default KPICard;