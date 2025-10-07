// src/pages/GetInvolved.jsx
import React, { useState } from "react";
import { volunteerRoles } from "../data/volunteer";

export default function GetInvolved() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = ["All", ...new Set(volunteerRoles.map((v) => v.category))];
  const filteredRoles =
    filter === "All"
      ? volunteerRoles
      : volunteerRoles.filter((v) => v.category === filter);

  return (
    <div style={{ padding: 24 }}>
      <h1>Volunteer Opportunities</h1>
      <p style={{ color: "#555" }}>
        Join our team of dedicated volunteers making a difference in the
        community. Explore roles that fit your skills and schedule.
      </p>

      {/* Category Filter */}
      <div style={{ marginTop: 16 }}>
        <strong>Filter by Category: </strong>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            style={{
              marginRight: 8,
              padding: "6px 10px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: c === filter ? "#2C733C" : "#fff",
              color: c === filter ? "#fff" : "#333",
              cursor: "pointer",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Roles Grid */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {filteredRoles.map((role) => (
          <div
            key={role.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fafafa",
            }}
          >
            <h3>{role.title}</h3>
            <p style={{ color: "#555" }}>{role.description}</p>
            <p>
              <strong>Skills:</strong> {role.skills.join(", ")}
            </p>
            <p>
              <strong>Commitment:</strong> {role.timeCommitment}
            </p>
            <p>
              <strong>Location:</strong> {role.location}
            </p>
            <button
              onClick={() => setSelected(role)}
              style={{
                marginTop: 8,
                padding: "6px 12px",
                background: "#86CDEB",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>

      {/* Modal Signup Form */}
      {selected && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            display: "grid",
            placeItems: "center",
            zIndex: 999,
          }}
          onClick={() => setSelected(null)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              padding: 24,
              borderRadius: 12,
              width: "90%",
              maxWidth: 420,
            }}
          >
            <h2>Sign Up – {selected.title}</h2>
            <p style={{ fontSize: 14, color: "#555" }}>
              {selected.description}
            </p>

            <label style={{ display: "block", marginTop: 12 }}>
              Name
              <input
                required
                type="text"
                placeholder="Your name"
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 4,
                }}
              />
            </label>

            <label style={{ display: "block", marginTop: 12 }}>
              Email
              <input
                required
                type="email"
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 4,
                }}
              />
            </label>

            <label style={{ display: "block", marginTop: 12 }}>
              Notes
              <textarea
                rows="3"
                placeholder="Anything you'd like us to know?"
                style={{
                  width: "100%",
                  padding: 8,
                  marginTop: 4,
                }}
              />
            </label>

            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  background: "#2C733C",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{
                  flex: 1,
                  background: "#eee",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
