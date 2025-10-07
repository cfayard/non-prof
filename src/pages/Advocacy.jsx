// src/pages/Advocacy.jsx
import React, { useEffect, useMemo, useState } from "react";
import { advocacyActions } from "../data/advocacy";

const STORAGE_KEY = "advocacy_done_ids";

export default function Advocacy() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [done, setDone] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const tags = useMemo(
    () => [
      "All",
      ...Array.from(new Set(advocacyActions.flatMap((a) => a.tags || []))),
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return advocacyActions.filter((a) => {
      const matchesTag = tag === "All" || (a.tags || []).includes(tag);
      const matchesQ =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        (a.type || "").toLowerCase().includes(q);
      return matchesTag && matchesQ;
    });
  }, [query, tag]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
  }, [done]);

  const toggleDone = (id) =>
    setDone((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const shareLinks = (title, url) => {
    const u = encodeURIComponent(url);
    const t = encodeURIComponent(title);
    return {
      twitter: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      email: `mailto:?subject=${t}&body=${u}`,
      copy: url,
    };
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copied!");
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Link copied!");
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Advocacy & Awareness</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        Take quick actions to support food security, mentorship, and tech
        training. Filter by topic, search by keyword, and mark items as done to
        track your impact.
      </p>

      {/* Filters */}
      <div
        style={{ marginTop: 16, display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <select
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
        >
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search actions (e.g., 'petition', 'market', 'mentor')"
          style={{
            flex: 1,
            minWidth: 220,
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
          }}
        />
      </div>

      {/* Actions grid */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gap: 16,
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {filtered.map((a) => {
          const links = shareLinks(
            a.title,
            a.link || a.guide || window.location.href
          );
          const isDone = done.includes(a.id);
          return (
            <div
              key={a.id}
              style={{
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 16,
                background: "#fafafa",
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <label style={{ fontSize: 13 }}>
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => toggleDone(a.id)}
                    style={{ marginRight: 6 }}
                  />
                  Done
                </label>
              </div>

              <div style={{ fontSize: 12, opacity: 0.8 }}>{a.type}</div>
              <h3 style={{ marginTop: 2 }}>{a.title}</h3>
              <p style={{ color: "#555" }}>{a.description}</p>

              {/* Primary CTA by type */}
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  marginTop: 8,
                }}
              >
                {a.type === "Petition" && a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    style={btnPrimary}
                  >
                    Sign Petition
                  </a>
                )}
                {a.type === "Call" && (
                  <>
                    {a.phoneLookup && (
                      <a
                        href={a.phoneLookup}
                        target="_blank"
                        rel="noreferrer"
                        style={btnPrimary}
                      >
                        Find My Rep
                      </a>
                    )}
                    {a.script && (
                      <button
                        onClick={() => copyToClipboard(fillScript(a.script))}
                        style={btnSecondary}
                      >
                        Copy Call Script
                      </button>
                    )}
                  </>
                )}
                {a.type === "Share" && a.link && (
                  <>
                    <a
                      href={links.twitter}
                      target="_blank"
                      rel="noreferrer"
                      style={btnPrimary}
                    >
                      Share on X
                    </a>
                    <a
                      href={links.facebook}
                      target="_blank"
                      rel="noreferrer"
                      style={btnSecondary}
                    >
                      Share on Facebook
                    </a>
                    <a href={links.email} style={btnSecondary}>
                      Share via Email
                    </a>
                    <button
                      onClick={() => copyToClipboard(links.copy)}
                      style={btnSecondary}
                    >
                      Copy Link
                    </button>
                  </>
                )}
                {a.type === "Host" && a.guide && (
                  <a
                    href={a.guide}
                    target="_blank"
                    rel="noreferrer"
                    style={btnPrimary}
                  >
                    Download Host Kit
                  </a>
                )}
                {a.type === "Subscribe" && a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noreferrer"
                    style={btnPrimary}
                  >
                    Join Newsletter
                  </a>
                )}
              </div>

              {/* Tags */}
              {a.tags?.length ? (
                <div
                  style={{
                    marginTop: 10,
                    display: "flex",
                    gap: 6,
                    flexWrap: "wrap",
                  }}
                >
                  {a.tags.map((t) => (
                    <span key={t} style={chip}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Progress summary */}
      <div style={{ marginTop: 20, color: "#333" }}>
        Completed: <strong>{done.length}</strong> / {advocacyActions.length}
      </div>
    </div>
  );
}

function fillScript(template) {
  const name = "Your Name";
  const zip = "XXXXX";
  return template.replace("{{name}}", name).replace("{{zip}}", zip);
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

const chip = {
  fontSize: 12,
  background: "#eee",
  borderRadius: 999,
  padding: "4px 8px",
};
