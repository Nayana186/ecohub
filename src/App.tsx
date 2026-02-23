import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Pages (can be your real pages or placeholders)
import EwasteTrackerSetup from "./pages/EwasteTrackerSetup";
import WasteAvailable from "./pages/WasteAvailable";
import DataErasedCertification from "./pages/DataErasedCertification";
import Rewards from "./pages/Rewards";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// Demo pages
import SecondHandDemo from "./pages/SecondHandDemo";
import Profile from "./pages/Profile";

function App() {
  // Global user state
  const [user, setUser] = useState({
    name: "Nayana Surendran",
    email: "nayana@example.com",
    credits: 150
  });

  const [cart, setCart] = useState<any[]>([]);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #ccc",
          marginBottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          background: "#ffffff",
          alignItems: "center"
        }}
      >
        <Link to="/">Tracker Setup</Link>
        <Link to="/available-pickups">Waste Available</Link>
        <Link to="/data-erased-certificate">Data Erasure Certificate</Link>
        <Link to="/rewards">Rewards</Link>
        <Link to="/second-hand">Second-Hand Store</Link>
        <Link to="/profile">Profile</Link>

        {/* Admin / Platform View */}
        <Link
          to="/admin-dashboard"
          style={{ fontWeight: "bold", color: "#2e7d32" }}
        >
          Admin Dashboard
        </Link>

        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup" style={{ marginLeft: "10px" }}>Signup</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<EwasteTrackerSetup />} />
        <Route path="/available-pickups" element={<WasteAvailable />} />
        <Route path="/data-erased-certificate" element={<DataErasedCertification />} />
        <Route path="/rewards" element={<Rewards />} />

        {/* Second-Hand Store with props */}
        <Route
          path="/second-hand"
          element={
            <SecondHandDemo user={user} setUser={setUser} cart={cart} setCart={setCart} />
          }
        />

        {/* Profile page */}
        <Route
          path="/profile"
          element={<Profile user={user} />}
        />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;