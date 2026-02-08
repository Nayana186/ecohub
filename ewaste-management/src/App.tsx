import { Routes, Route, Link } from "react-router-dom";
import EwasteTrackerSetup from "./pages/EwasteTrackerSetup";
import WasteAvailable from "./pages/WasteAvailable";
import DataErasedCertification from "./pages/DataErasedCertification";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import SecondHandMarket from "./pages/SecondHandMarket";

function App() {
  return (
    <>
      <nav
        style={{
          padding: "10px",
          borderBottom: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        <Link to="/" style={{ marginRight: "15px" }}>
          Tracker Setup
        </Link>
        <Link to="/available-pickups">Waste Available</Link>

        <Link to="/data-erased-certificate" style={{ marginLeft: "15px" }}>
          Data Erasure Certificate
        </Link>

        <Link to="/rewards" style={{ marginLeft: "15px" }}>
          Rewards
        </Link>

        <Link to="/about" style={{ marginLeft: "15px" }}>
          About
        </Link>

        <Link to="/second-hand" style={{ marginLeft: "15px" }}>
          Second-Hand Store
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<EwasteTrackerSetup />} />
        <Route path="/available-pickups" element={<WasteAvailable />} />
        <Route
          path="/data-erased-certificate"
          element={<DataErasedCertification />}
        />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/about" element={<About />} />
        <Route path="/second-hand" element={<SecondHandMarket />} />
      </Routes>
    </>
  );
}

export default App;
