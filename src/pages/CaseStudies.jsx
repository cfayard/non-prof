// src/pages/CaseStudies.jsx
import React, { useMemo, useState } from "react";
import { caseStudies, caseStudyCategories } from "../data/caseStudies";

export default function CaseStudies() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return caseStudies.filter((c) => {
      const inCat = category === "All" || c.category === category;
      const inText =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        (c.orgOrPerson || "").toLowerCase().includes(q) ||
        (c.tags || []).join(" ").toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [query, category]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Case Studies</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Deep dives into challenges, solutions, and measurable outcomes from our
        programs and partners.
      </p>

      {/* Filters */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
        >
          {caseStudyCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, org/person, or tag…"
          style={{
            flex: 1,
            minWidth: 260,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Cards */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {filtered.map((c) => (
          <article
            key={c.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fafafa",
            }}
          >
            {c.media?.[0]?.type === "image" && (
              <img
                src={c.media[0].src}
                alt={c.media[0].alt || c.title}
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}
            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 13, opacity: 0.7 }}>{c.category}</div>
              <h3 style={{ margin: "4px 0 0" }}>{c.title}</h3>
              <div style={{ fontSize: 14, color: "#666" }}>
                {c.orgOrPerson} • {formatDate(c.date)}
              </div>
              <p style={{ marginTop: 8 }}>{c.summary}</p>

              {/* Tags */}
              {c.tags?.length ? (
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {c.tags.map((t) => (
                    <span key={t} style={chip}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div
                style={{
                  marginTop: 12,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                {c.pdf && (
                  <a
                    href={c.pdf}
                    target="_blank"
                    rel="noreferrer"
                    style={btnSecondary}
                  >
                    Download PDF
                  </a>
                )}
                <button onClick={() => setSelected(c)} style={btnPrimary}>
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 12,
              width: "92%",
              maxWidth: 860,
              maxHeight: "92vh",
              overflow: "auto",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{selected.title}</h2>
            <div style={{ color: "#666" }}>
              {selected.orgOrPerson} • {formatDate(selected.date)} •{" "}
              {selected.category}
            </div>

            {selected.media?.length ? (
              <div
                style={{
                  marginTop: 12,
                  display: "grid",
                  gap: 10,
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                }}
              >
                {selected.media.map((m, i) =>
                  m.type === "image" ? (
                    <img
                      key={i}
                      src={m.src}
                      alt={m.alt || ""}
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        display: "block",
                      }}
                    />
                  ) : (
                    <div
                      key={i}
                      style={{
                        position: "relative",
                        paddingTop: "56.25%",
                        borderRadius: 10,
                        overflow: "hidden",
                      }}
                    >
                      <iframe
                        src={m.src}
                        title={m.title || `video-${i}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        style={{
                          position: "absolute",
                          inset: 0,
                          width: "100%",
                          height: "100%",
                          border: 0,
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            ) : null}

            <section style={{ marginTop: 16 }}>
              <h3>Problem</h3>
              <p>{selected.problem}</p>
            </section>

            <section style={{ marginTop: 12 }}>
              <h3>Solution</h3>
              <ul style={{ paddingLeft: 18 }}>
                {selected.solution.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            <section style={{ marginTop: 12 }}>
              <h3>Results</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {selected.results.map((r, i) => (
                  <div
                    key={i}
                    style={{
                      minWidth: 160,
                      border: "1px solid #eee",
                      borderRadius: 10,
                      padding: 12,
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: 20, fontWeight: 700 }}>
                      {r.value}
                    </div>
                    <div style={{ fontSize: 12, color: "#666" }}>{r.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {selected.pdf && (
              <div style={{ marginTop: 16 }}>
                <a
                  href={selected.pdf}
                  target="_blank"
                  rel="noreferrer"
                  style={btnSecondary}
                >
                  Download Full Case Study (PDF)
                </a>
              </div>
            )}

            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <button onClick={() => setSelected(null)} style={btnPlain}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- helpers & styles ---------- */

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

const btnPrimary = {
  display: "inline-block",
  padding: "8px 12px",
  background: "#2C733C",
  color: "#fff",
  borderRadius: 8,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
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

const chip = {
  fontSize: 12,
  background: "#eee",
  borderRadius: 999,
  padding: "3px 8px",
};
