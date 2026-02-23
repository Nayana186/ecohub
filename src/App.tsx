import { Routes, Route, Link } from "react-router-dom";

import EwasteTrackerSetup from "./pages/EwasteTrackerSetup";
import WasteAvailable from "./pages/WasteAvailable";
import DataErasedCertification from "./pages/DataErasedCertification";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import SecondHandMarket from "./pages/SecondHandMarket";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <>
      {/* Navigation */}
      <nav
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          background: "#ffffff"
        }}
      >
        <Link to="/">Tracker Setup</Link>
        <Link to="/available-pickups">Waste Available</Link>
        <Link to="/data-erased-certificate">
          Data Erasure Certificate
        </Link>
        <Link to="/rewards">Rewards</Link>
        <Link to="/second-hand">Second-Hand Store</Link>

        {/* Admin / Platform View */}
        <Link
          to="/admin-dashboard"
          style={{ fontWeight: "bold", color: "#2e7d32" }}
        >
          Admin Dashboard
        </Link>

        <Link to="/about">About</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<EwasteTrackerSetup />} />
        <Route path="/available-pickups" element={<WasteAvailable />} />
        <Route
          path="/data-erased-certificate"
          element={<DataErasedCertification />}
        />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/second-hand" element={<SecondHandMarket />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;