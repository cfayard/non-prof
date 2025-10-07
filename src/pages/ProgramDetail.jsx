import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { programs } from "../data/programs";

export default function ProgramDetail() {
  const { slug } = useParams();

  // ✅ Hooks always first
  const program = useMemo(() => programs.find((p) => p.id === slug), [slug]);
  const images = useMemo(
    () => (program?.media || []).filter((m) => m.type === "image"),
    [program]
  );
  const videos = useMemo(
    () =>
      (program?.media || []).filter(
        (m) => m.type === "youtube" || m.type === "video"
      ),
    [program]
  );

  const [interest, setInterest] = useState({
    name: "",
    email: "",
    type: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [slug]);

  if (!program) {
    return (
      <div style={{ padding: 24 }}>
        <h1>Program not found</h1>
        <Link to="/programs">← Back to Programs</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Interest submission:", { program: program.id, ...interest });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setInterest({ name: "", email: "", type: "", notes: "" });
  };

  return (
    <div style={{ padding: 24 }}>
      <Link to="/programs">← Back to Programs</Link>
      <h1 style={{ marginTop: 8 }}>{program.name}</h1>
      <p style={{ color: "#555" }}>{program.overview}</p>

      {/* ---------- Goals & Impact ---------- */}
      <section style={{ marginTop: 24 }}>
        <h2 id="goals" style={{ scrollMarginTop: 80 }}>
          Goals & Impact
        </h2>

        <div
          style={{ display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr" }}
        >
          <div
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}
          >
            <h3>Goals</h3>
            <ul>
              {program.goals.map((g, i) => (
                <li key={i} style={{ margin: "6px 0" }}>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}
          >
            <h3>Impact Metrics</h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 8,
              }}
            >
              {Object.entries(program.impact).map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    minWidth: 140,
                    border: "1px solid #eee",
                    borderRadius: 10,
                    padding: 12,
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: 20, fontWeight: 700 }}>
                    {typeof v === "number" ? v : String(v)}
                    {k.toLowerCase().includes("pct") ? "%" : ""}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#666",
                      textTransform: "capitalize",
                    }}
                  >
                    {k.replace(/([A-Z])/g, " $1")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- How to Get Involved ---------- */}
      {program.involvement && (
        <section style={{ marginTop: 32 }}>
          <h2 id="involvement" style={{ scrollMarginTop: 80 }}>
            How to Get Involved
          </h2>

          <div
            style={{
              display: "grid",
              gap: 16,
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            }}
          >
            {program.involvement.map((opt, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 12,
                  padding: 16,
                  background: "#fafafa",
                }}
              >
                <h3 style={{ marginBottom: 4 }}>{opt.type}</h3>
                <p style={{ color: "#555" }}>{opt.detail}</p>
                <a
                  href={opt.href}
                  style={{
                    display: "inline-block",
                    marginTop: 8,
                    padding: "6px 12px",
                    background: "#2C733C",
                    color: "#fff",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  {opt.cta}
                </a>
              </div>
            ))}
          </div>

          {/* Interest Form */}
          <form
            onSubmit={handleSubmit}
            style={{ marginTop: 24, maxWidth: 480 }}
          >
            <h3>Express Interest</h3>
            <label style={{ display: "block", marginTop: 8 }}>
              Name
              <input
                required
                value={interest.name}
                onChange={(e) =>
                  setInterest({ ...interest, name: e.target.value })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <label style={{ display: "block", marginTop: 8 }}>
              Email
              <input
                required
                type="email"
                value={interest.email}
                onChange={(e) =>
                  setInterest({ ...interest, email: e.target.value })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <label style={{ display: "block", marginTop: 8 }}>
              Involvement Type
              <select
                value={interest.type}
                onChange={(e) =>
                  setInterest({ ...interest, type: e.target.value })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              >
                <option value="">Select one…</option>
                {program.involvement.map((opt, i) => (
                  <option key={i} value={opt.type}>
                    {opt.type}
                  </option>
                ))}
              </select>
            </label>

            <label style={{ display: "block", marginTop: 8 }}>
              Notes
              <textarea
                rows="3"
                value={interest.notes}
                onChange={(e) =>
                  setInterest({ ...interest, notes: e.target.value })
                }
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
            </label>

            <button
              type="submit"
              style={{
                marginTop: 12,
                padding: "8px 14px",
                background: "#86CDEB",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
              }}
            >
              Submit Interest
            </button>

            {submitted && (
              <p style={{ marginTop: 8, color: "green" }}>
                Thanks! We’ll be in touch soon.
              </p>
            )}
          </form>
        </section>
      )}
    </div>
  );
}
