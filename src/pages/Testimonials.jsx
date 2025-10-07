// src/pages/Testimonials.jsx
import React, { useMemo, useState } from "react";
import { testimonials, testimonialCategories } from "../data/testimonials";

export default function Testimonials() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return testimonials.filter((t) => {
      const inCat = category === "All" || t.category === category;
      const inText =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.role.toLowerCase().includes(q) ||
        t.quote.toLowerCase().includes(q);
      const featured = !featuredOnly || Boolean(t.highlight);
      return inCat && inText && featured;
    });
  }, [query, category, featuredOnly]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Impact Stories & Testimonials</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Real voices from students, volunteers, donors, and partners. Filter and
        search to explore their stories.
      </p>

      {/* Controls */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
        >
          {testimonialCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name, program, or quote…"
          style={{
            flex: 1,
            minWidth: 260,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
          <input
            type="checkbox"
            checked={featuredOnly}
            onChange={(e) => setFeaturedOnly(e.target.checked)}
          />
          Featured only
        </label>
      </div>

      {/* Cards */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {filtered.map((t) => (
          <article
            key={t.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fafafa",
              display: "grid",
              gridTemplateRows: "auto auto 1fr auto",
              gap: 8,
            }}
          >
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <img
                src={t.avatar}
                alt={t.name}
                width={56}
                height={56}
                style={{ borderRadius: "50%", objectFit: "cover" }}
              />
              <div>
                <div style={{ fontWeight: 700 }}>{t.name}</div>
                <div style={{ fontSize: 13, color: "#666" }}>{t.role}</div>
              </div>
            </div>

            <blockquote
              style={{ margin: 0, fontStyle: "italic", color: "#333" }}
            >
              “{t.quote}”
            </blockquote>

            {t.highlight && (
              <div
                style={{
                  marginTop: 4,
                  fontSize: 12,
                  background: "#86CDEB",
                  color: "#000",
                  display: "inline-block",
                  padding: "4px 8px",
                  borderRadius: 999,
                }}
              >
                {t.highlight}
              </div>
            )}

            <div style={{ marginTop: 8 }}>
              <button
                style={{
                  padding: "6px 10px",
                  background: "#2C733C",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                }}
                onClick={() => {
                  // Placeholder action: later you might open a full story modal or route.
                  alert("Thanks for reading! Full story coming soon.");
                }}
              >
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {!filtered.length && (
        <p style={{ marginTop: 24, color: "#666" }}>
          No testimonials match your filters yet.
        </p>
      )}
    </div>
  );
}
