import React from "react";

type Props = {
  user: { name: string; email: string; credits: number };
};

const Profile: React.FC<Props> = ({ user }) => {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>👤 User Profile</h2>

      <div style={{
        border: "1px solid #ddd",
        padding: 16,
        borderRadius: 10,
        background: "#fff",
        maxWidth: 400,
        color:"#000",
      }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Credits:</strong> 🪙 {user.credits}</p>

        <button
          style={{
            marginTop: 12,
            padding: "6px 12px",
            borderRadius: 4,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
          onClick={() => alert("Edit Profile clicked")}
        >
          ✏️ Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;