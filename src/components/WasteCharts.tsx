import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = ["#4CAF50", "#2196F3", "#FFC107", "#FF5722"];

type Props = {
  wasteByCategory: any[];
  monthlyCollection: any[];
  recycleVsReuse: any[];
};

const WasteCharts = ({
  wasteByCategory,
  monthlyCollection,
  recycleVsReuse
}: Props) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
      
      {/* Waste Category Pie */}
      <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
        <h3>Waste by Category</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={wasteByCategory} dataKey="value" nameKey="name">
              {wasteByCategory.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Collection */}
      <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
        <h3>Monthly E-Waste Collection (kg)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyCollection}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="weight" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Recycle vs Reuse */}
      <div style={{ background: "#fff", padding: 20, borderRadius: 12 }}>
        <h3>Recycle vs Reuse</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={recycleVsReuse} dataKey="value" nameKey="name">
              {recycleVsReuse.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default WasteCharts;