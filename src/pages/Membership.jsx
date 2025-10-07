// src/pages/Membership.jsx
import React, { useMemo, useState } from "react";
import { membershipTiers } from "../data/memberships";
import { sponsorshipPackages } from "../data/sponsorships";

export default function Membership() {
  const [mode, setMode] = useState("Membership"); // "Membership" | "Sponsorship"
  const [cadence, setCadence] = useState("Monthly"); // Monthly | Annual
  const [selected, setSelected] = useState(null);

  const tiers = useMemo(
    () => membershipTiers.filter((t) => t.cadence === cadence),
    [cadence]
  );

  return (
    <div style={{ padding: 24, maxWidth: 1000, margin: "0 auto" }}>
      <h1>Get Involved: Membership & Sponsorship</h1>
      <p style={{ color: "#555" }}>
        Join our mission as an individual member or a corporate sponsor. Your
        support powers youth mentorship, food security, and tech training
        programs across our community.
      </p>

      {/* Toggle between Membership and Sponsorship */}
      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["Membership", "Sponsorship"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #ddd",
              background: mode === m ? "#2C733C" : "#fff",
              color: mode === m ? "#fff" : "#333",
              cursor: "pointer",
            }}
          >
            {m}
          </button>
        ))}

        {mode === "Membership" && (
          <div style={{ marginLeft: "auto" }}>
            <label style={{ fontWeight: 600, marginRight: 8 }}>Cadence:</label>
            <select
              value={cadence}
              onChange={(e) => setCadence(e.target.value)}
              style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
            >
              <option>Monthly</option>
              <option>Annual</option>
            </select>
          </div>
        )}
      </div>

      {/* Membership view */}
      {mode === "Membership" && (
        <>
          <section style={{ marginTop: 20 }}>
            <h2>{cadence} Membership Tiers</h2>
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                marginTop: 12,
              }}
            >
              {tiers.map((t) => (
                <div
                  key={t.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 16,
                    background: "#fafafa",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ marginTop: 6, fontSize: 20 }}>
                    {t.cadence === "Monthly"
                      ? `$${t.price}/mo`
                      : `$${t.price}/yr`}
                  </div>
                  <p style={{ color: "#555" }}>{t.blurb}</p>
                  <ul style={{ paddingLeft: 18 }}>
                    {t.benefits.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setSelected({ type: "membership", item: t })}
                    style={{
                      marginTop: 10,
                      padding: "8px 12px",
                      background: "#86CDEB",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    Join {t.name}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 24 }}>
            <h3>Benefits for All Members</h3>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Welcome email + digital membership card</li>
              <li>Invites to member events and volunteer days</li>
              <li>Impact updates and behind-the-scenes stories</li>
            </ul>
          </section>
        </>
      )}

      {/* Sponsorship view */}
      {mode === "Sponsorship" && (
        <>
          <section style={{ marginTop: 20 }}>
            <h2>Corporate & Program Sponsorships</h2>
            <p style={{ color: "#555" }}>
              Align your brand with high-impact community work. Choose a
              sponsorship package or contact us for a custom plan.
            </p>
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                marginTop: 12,
              }}
            >
              {sponsorshipPackages.map((s) => (
                <div
                  key={s.id}
                  style={{
                    border: "1px solid #eee",
                    borderRadius: 12,
                    padding: 16,
                    background: "#fafafa",
                  }}
                >
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{s.name}</div>
                  <div style={{ marginTop: 6, fontSize: 20 }}>
                    {s.amount ? `$${s.amount}` : "Custom"}
                  </div>
                  <ul style={{ paddingLeft: 18 }}>
                    {s.perks.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() =>
                      setSelected({ type: "sponsorship", item: s })
                    }
                    style={{
                      marginTop: 10,
                      padding: "8px 12px",
                      background: "#2C733C",
                      color: "#fff",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontWeight: 700,
                    }}
                  >
                    {s.amount ? "Sponsor Now" : "Discuss Custom Package"}
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginTop: 24 }}>
            <h3>Brand Visibility & Partnership</h3>
            <ul style={{ lineHeight: 1.6 }}>
              <li>Logo placement and public recognition</li>
              <li>Team volunteer days and engagement opportunities</li>
              <li>Impact reporting for CSR/ESG goals</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              Questions? <a href="/contact">Contact us</a> for a sponsorship
              deck and next steps.
            </p>
          </section>
        </>
      )}

      {/* Modal: Join/Sponsor form (lightweight placeholder) */}
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
              console.log("Membership/Sponsorship interest:", {
                kind: selected.type,
                selection: selected.item.id,
                ...payload,
              });
              alert("Thanks! We’ll follow up shortly.");
              setSelected(null);
            }}
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 12,
              width: "90%",
              maxWidth: 460,
            }}
          >
            <h2 style={{ marginTop: 0 }}>
              {selected.type === "membership" ? "Join" : "Sponsor"} –{" "}
              {selected.item.name}
            </h2>

            <label style={{ display: "block", marginTop: 10 }}>
              Organization / Name
              <input
                required
                name="name"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Email
              <input
                required
                type="email"
                name="email"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <label style={{ display: "block", marginTop: 10 }}>
              Notes
              <textarea
                name="notes"
                rows="3"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  background: "#86CDEB",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
              >
                Send
              </button>
              <button
                type="button"
                onClick={() => setSelected(null)}
                style={{
                  flex: 1,
                  padding: "8px 12px",
                  background: "#eee",
                  border: "none",
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
