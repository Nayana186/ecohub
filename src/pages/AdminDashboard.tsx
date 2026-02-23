import KPICard from "../components/KPICard";
import WasteCharts from "../components/WasteCharts";
import {
  kpiData,
  wasteByCategory,
  monthlyCollection,
  recycleVsReuse
} from "../data/adminDashboardData";

const AdminDashboard = () => {
  return (
    <div
      style={{
        padding: "24px",
        background: "#f4f6f8",
        minHeight: "100vh",
        color: "#111"
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>
        Admin Analytics Dashboard
      </h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "32px"
        }}
      >
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
          />
        ))}
      </div>

      {/* Charts */}
      <WasteCharts
        wasteByCategory={wasteByCategory}
        monthlyCollection={monthlyCollection}
        recycleVsReuse={recycleVsReuse}
      />
    </div>
  );
};

export default AdminDashboard;