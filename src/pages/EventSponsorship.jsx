// src/pages/EventSponsorship.jsx
import React, { useState } from "react";
import { eventSponsorships } from "../data/eventSponsorships"; // or: import { sponsorshipPackages as eventSponsorships } from "../data/sponsorships";

export default function EventSponsorship() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h1>Event Sponsorships</h1>
      <p style={{ color: "#555", maxWidth: 820 }}>
        Partner with us to power high-impact events that raise funds and
        awareness for youth mentorship, food security, and tech training. Gain
        meaningful brand visibility and engage your team.
      </p>

      {/* Deck + contact */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <a
          href="/assets/sponsorship-deck.pdf"
          target="_blank"
          rel="noreferrer"
          style={btnSecondary}
        >
          Download Sponsorship Deck (PDF)
        </a>
        <a href="/contact" style={btnSecondary}>
          Contact Our Team
        </a>
      </div>

      {/* Packages */}
      <section style={{ marginTop: 24 }}>
        <h2>Packages & Benefits</h2>
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {eventSponsorships.map((s) => (
            <div
              key={s.id}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 16,
                background: "#fafafa",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: 18, fontWeight: 700 }}>{s.name}</div>
                <div style={{ marginTop: 6, fontSize: 20 }}>
                  {s.amount ? `$${s.amount}` : "Custom"}
                </div>
                <ul style={{ marginTop: 8, paddingLeft: 18 }}>
                  {s.perks.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                <button onClick={() => setSelected(s)} style={btnPrimary}>
                  {s.amount ? "Sponsor This Event" : "Discuss Custom"}
                </button>
                <a href="/events" style={btnPlain}>
                  See Upcoming Events
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why sponsor */}
      <section style={{ marginTop: 24 }}>
        <h3>Why Sponsor?</h3>
        <ul style={{ lineHeight: 1.6 }}>
          <li>Align your brand with proven community impact</li>
          <li>Reach engaged supporters online and in-person</li>
          <li>Offer team-building through volunteer activations</li>
          <li>Receive post-event impact reporting for CSR/ESG</li>
        </ul>
      </section>

      {/* Modal: interest form */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
          }}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              const form = new FormData(e.currentTarget);
              const payload = Object.fromEntries(form.entries());
              console.log("Event sponsorship interest:", {
                selection: selected.id,
                ...payload,
              });
              alert("Thanks! Our team will follow up shortly.");
              setSelected(null);
            }}
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 12,
              width: "90%",
              maxWidth: 520,
            }}
          >
            <h2 style={{ marginTop: 0 }}>Sponsor – {selected.name}</h2>

            <label style={{ display: "block", marginTop: 10 }}>
              Company / Organization
              <input name="org" required style={input} />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Primary Contact
              <input name="name" required style={input} />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Email
              <input name="email" type="email" required style={input} />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Phone (optional)
              <input name="phone" style={input} />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Notes
              <textarea
                name="notes"
                rows="3"
                style={{ ...input, height: "auto" }}
              />
            </label>

            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button type="submit" style={btnPrimary}>
                Send
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={btnPlain}
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

/* ---------- styles ---------- */
const btnPrimary = {
  display: "inline-block",
  padding: "8px 12px",
  background: "#2C733C",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};

const btnSecondary = {
  display: "inline-block",
  padding: "8px 12px",
  background: "#86CDEB",
  color: "#000",
  borderRadius: 8,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};

const btnPlain = {
  display: "inline-block",
  padding: "8px 12px",
  background: "#eee",
  color: "#333",
  borderRadius: 8,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
};

const input = {
  width: "100%",
  padding: 8,
  marginTop: 4,
  borderRadius: 8,
  border: "1px solid #ccc",
};
