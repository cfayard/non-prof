// src/pages/Donate.jsx
import React from "react";

export default function Donate() {
  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1>Support Our Mission 💛</h1>
      <p style={{ color: "#555", marginTop: 8 }}>
        Every donation directly funds programs that empower youth, feed
        families, and expand access to technology education. Your generosity
        fuels real impact across our community.
      </p>

      <section style={{ marginTop: 24 }}>
        <h2>Ways to Give</h2>
        <ul style={{ lineHeight: 1.6 }}>
          <li>
            <strong>One-Time Gift:</strong> Help fund a single program or event.
          </li>
          <li>
            <strong>Monthly Giving:</strong> Join our Sustainer Circle and
            provide reliable support.
          </li>
          <li>
            <strong>Corporate Match:</strong> Double your impact through
            employer matching.
          </li>
          <li>
            <strong>In-Kind Donations:</strong> Contribute laptops, food, or
            equipment.
          </li>
        </ul>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Suggested Giving Levels</h2>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            marginTop: 12,
          }}
        >
          {[
            { amount: "$25", desc: "Covers supplies for one student" },
            { amount: "$50", desc: "Funds one volunteer workshop" },
            { amount: "$100", desc: "Provides a week of food support" },
            { amount: "$250", desc: "Sponsors a full month of training" },
          ].map((tier) => (
            <div
              key={tier.amount}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 16,
                background: "#fafafa",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 22, fontWeight: "bold" }}>
                {tier.amount}
              </div>
              <p style={{ color: "#555", fontSize: 14 }}>{tier.desc}</p>
              <button
                style={{
                  marginTop: 8,
                  padding: "6px 12px",
                  background: "#86CDEB",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Donate
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32 }}>
        <h2>Mail a Check or Donate In Person</h2>
        <p style={{ color: "#555" }}>
          Checks can be made payable to{" "}
          <strong>Community Impact Initiative</strong> and mailed to:
        </p>
        <address style={{ marginTop: 4, fontStyle: "normal" }}>
          123 Example Avenue
          <br />
          Nashville, TN 37210
        </address>
        <p style={{ marginTop: 8, color: "#555" }}>
          Have questions about sponsorships or other giving opportunities?
          <a href="/contact">Contact us</a> — we’d love to connect.
        </p>
      </section>

      <div style={{ marginTop: 32, textAlign: "center", color: "#666" }}>
        <em>
          Online donations will be available soon via secure checkout (Stripe).
        </em>
      </div>
    </div>
  );
}
