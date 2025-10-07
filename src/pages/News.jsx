// src/pages/News.jsx
import React, { useMemo, useState } from "react";
import { posts, postCategories } from "../data/posts";
import { Link } from "react-router-dom";

export default function News() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts
      .slice()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .filter((p) => {
        const inCat = category === "All" || p.category === category;
        const inText =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          (p.tags || []).join(" ").toLowerCase().includes(q) ||
          (p.author || "").toLowerCase().includes(q);
        return inCat && inText;
      });
  }, [query, category]);

  return (
    <div style={{ padding: 24 }}>
      <h1>News & Blog</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Organization updates, educational guides, and guest perspectives.
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
          {postCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, tags, authors…"
          style={{
            flex: 1,
            minWidth: 260,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Grid */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {filtered.map((p) => (
          <article
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              overflow: "hidden",
              background: "#fafafa",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {p.cover && (
              <img
                src={p.cover}
                alt={p.title}
                style={{
                  width: "100%",
                  height: 150,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            )}

            <div style={{ padding: 16 }}>
              <div style={{ fontSize: 12, opacity: 0.75 }}>{p.category}</div>
              <h3 style={{ margin: "4px 0 0" }}>{p.title}</h3>
              <div style={{ fontSize: 13, color: "#666" }}>
                {new Date(p.date).toLocaleDateString()} • {p.author}
              </div>
              <p style={{ marginTop: 8 }}>{p.excerpt}</p>

              {p.tags?.length ? (
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        background: "#eee",
                        borderRadius: 999,
                        padding: "3px 8px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div style={{ marginTop: 10 }}>
                <Link
                  to={`/news/${p.slug}`}
                  style={{ color: "#2C733C", fontWeight: 700 }}
                >
                  Read More →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {!filtered.length && (
        <p style={{ marginTop: 24, color: "#666" }}>
          No posts match your filters yet.
        </p>
      )}
    </div>
  );
}
