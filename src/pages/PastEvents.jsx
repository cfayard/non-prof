// src/pages/PastEvents.jsx
import React, { useMemo, useState } from "react";
import { pastEvents, pastEventCategories } from "../data/pastEvents";

export default function PastEvents() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All");
  const [lightbox, setLightbox] = useState(null); // { src, alt }

  const years = useMemo(() => {
    const ys = Array.from(
      new Set(pastEvents.map((e) => new Date(e.date).getFullYear()))
    ).sort((a, b) => b - a);
    return ["All", ...ys];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return pastEvents.filter((e) => {
      const inCat = category === "All" || e.category === category;
      const inYear =
        year === "All" || new Date(e.date).getFullYear().toString() === year;
      const inText =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.summary.toLowerCase().includes(q) ||
        (e.locationName || "").toLowerCase().includes(q) ||
        (e.address || "").toLowerCase().includes(q);
      return inCat && inYear && inText;
    });
  }, [query, category, year]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Past Events</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Browse highlights from past events. Click images to enlarge or watch
        recap videos.
      </p>

      {/* Filters */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={select}
        >
          {pastEventCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={select}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search past events"
          style={{
            flex: 1,
            minWidth: 220,
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
        {filtered.map((e) => (
          <article
            key={e.id}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fafafa",
            }}
          >
            <div style={{ fontSize: 13, opacity: 0.7 }}>{e.category}</div>
            <h3 style={{ margin: "4px 0 0" }}>{e.title}</h3>
            <div style={{ marginTop: 6, fontSize: 14, color: "#444" }}>
              {formatDate(e.date)} • {e.locationName}
            </div>
            <p style={{ marginTop: 8 }}>{e.summary}</p>

            {/* Media gallery */}
            <div
              style={{
                marginTop: 10,
                display: "grid",
                gap: 8,
                gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              }}
            >
              {(e.media || []).map((m, i) => {
                if (m.type === "youtube") {
                  return (
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
                  );
                }
                return (
                  <button
                    key={i}
                    onClick={() =>
                      setLightbox({ src: m.src, alt: m.alt || "" })
                    }
                    style={{
                      padding: 0,
                      border: "1px solid #eee",
                      borderRadius: 10,
                      overflow: "hidden",
                      background: "#fff",
                      cursor: "zoom-in",
                    }}
                    aria-label={m.alt || "Event photo"}
                  >
                    <img
                      src={m.src}
                      alt={m.alt || ""}
                      style={{
                        width: "100%",
                        height: 100,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            style={{
              maxWidth: "92vw",
              maxHeight: "92vh",
              borderRadius: 12,
              display: "block",
            }}
          />
        </div>
      )}
    </div>
  );
}

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

const select = { padding: 8, borderRadius: 8, border: "1px solid #ccc" };
