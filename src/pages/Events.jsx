// src/pages/Events.jsx
import React, { useMemo, useState } from "react";
import { upcomingEvents, eventCategories } from "../data/events";

export default function Events() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return upcomingEvents.filter((e) => {
      const inCat = category === "All" || e.category === category;
      const inText =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.locationName || "").toLowerCase().includes(q) ||
        (e.address || "").toLowerCase().includes(q) ||
        (e.programTags || []).join(" ").toLowerCase().includes(q);
      return inCat && inText;
    });
  }, [query, category]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Upcoming Events</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Join us at an upcoming event—whether you want to celebrate, learn, or
        volunteer.
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
          {eventCategories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, location, or tag"
          style={{
            flex: 1,
            minWidth: 260,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Events grid */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 220,
            }}
          >
            <div>
              <div style={{ fontSize: 13, opacity: 0.7 }}>{e.category}</div>
              <h3 style={{ margin: "4px 0 0 0" }}>{e.title}</h3>
              <div style={{ marginTop: 6, fontSize: 14 }}>
                {formatDateRange(e.date, e.time, e.endTime)}
              </div>
              <div style={{ marginTop: 4, fontSize: 14, color: "#444" }}>
                {e.locationName} — {e.address}
              </div>

              {e.programTags?.length ? (
                <div
                  style={{
                    marginTop: 8,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {e.programTags.map((t) => (
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
            </div>

            <div
              style={{
                marginTop: 12,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <a
                href={googleMapsLink(e.address)}
                target="_blank"
                rel="noreferrer"
                style={btnSecondary}
              >
                Map
              </a>
              <button onClick={() => downloadIcs(e)} style={btnSecondary}>
                Add to Calendar
              </button>
              <button onClick={() => setSelected(e)} style={btnPrimary}>
                More Details
              </button>
              {e.rsvpUrl && (
                <a href={e.rsvpUrl} style={btnPrimary}>
                  RSVP
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Details modal */}
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
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 12,
              width: "90%",
              maxWidth: 640,
            }}
          >
            <h2 style={{ marginTop: 0 }}>{selected.title}</h2>
            <div style={{ color: "#555" }}>
              {formatDateRange(selected.date, selected.time, selected.endTime)}
            </div>
            <div style={{ marginTop: 6 }}>
              <strong>{selected.locationName}</strong>
              <div>{selected.address}</div>
            </div>

            <p style={{ marginTop: 12 }}>{selected.description}</p>

            {selected.programTags?.length ? (
              <div
                style={{
                  marginTop: 8,
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                }}
              >
                {selected.programTags.map((t) => (
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

            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <a
                href={googleMapsLink(selected.address)}
                target="_blank"
                rel="noreferrer"
                style={btnSecondary}
              >
                Open Map
              </a>
              <button
                onClick={() => downloadIcs(selected)}
                style={btnSecondary}
              >
                Add to Calendar
              </button>
              {selected.rsvpUrl && (
                <a href={selected.rsvpUrl} style={btnPrimary}>
                  RSVP
                </a>
              )}
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

/* ---------------- helpers ---------------- */

function googleMapsLink(address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

function formatDateRange(dateISO, startHHMM, endHHMM) {
  // Render like: Sun, Oct 12, 2025 • 6:00 PM – 9:00 PM
  try {
    const [sH, sM] = (startHHMM || "00:00")
      .split(":")
      .map((n) => parseInt(n, 10));
    const [eH, eM] = (endHHMM || "00:00")
      .split(":")
      .map((n) => parseInt(n, 10));
    const start = new Date(dateISO);
    start.setHours(sH, sM, 0, 0);
    const end = new Date(dateISO);
    end.setHours(eH, eM, 0, 0);

    const dPart = start.toLocaleDateString(undefined, {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const sPart = start.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    });
    const ePart = endHHMM
      ? end.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
        })
      : null;
    return ePart ? `${dPart} • ${sPart} – ${ePart}` : `${dPart} • ${sPart}`;
  } catch {
    return `${dateISO} ${startHHMM || ""}`;
  }
}

function downloadIcs(e) {
  const ics = buildIcs(e);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${e.id}.ics`;
  link.click();
  URL.revokeObjectURL(url);
}

function buildIcs(e) {
  // Minimal .ics; local time (no TZ) for simplicity
  const dt = (d, t) => {
    const [H, M] = (t || "00:00").split(":");
    return `${d.replace(/-/g, "")}T${H}${M}00`;
  };
  const uid = `${e.id}@nonprofit.local`;
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Nonprofit//Events//EN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z")}`,
    `DTSTART:${dt(e.date, e.time)}`,
    e.endTime ? `DTEND:${dt(e.date, e.endTime)}` : null,
    `SUMMARY:${escapeIcs(e.title)}`,
    `DESCRIPTION:${escapeIcs(e.description || "")}`,
    `LOCATION:${escapeIcs(
      `${e.locationName || ""} ${e.address || ""}`.trim()
    )}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
}

function escapeIcs(s) {
  return String(s)
    .replace(/([,;])/g, "\\$1")
    .replace(/\n/g, "\\n");
}

/* ---------------- styles ---------------- */

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
