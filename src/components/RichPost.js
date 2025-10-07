// src/components/RichPost.js
import React from "react";

export default function RichPost({ blocks = [] }) {
  return (
    <div>
      {blocks.map((b, i) => {
        if (b.type === "p")
          return (
            <p key={i} style={{ lineHeight: 1.6 }}>
              {b.text}
            </p>
          );
        if (b.type === "h2")
          return (
            <h2 key={i} style={{ marginTop: 18 }}>
              {b.text}
            </h2>
          );
        if (b.type === "h3")
          return (
            <h3 key={i} style={{ marginTop: 16 }}>
              {b.text}
            </h3>
          );
        if (b.type === "blockquote")
          return (
            <blockquote
              key={i}
              style={{
                margin: "12px 0",
                paddingLeft: 12,
                borderLeft: "3px solid #86CDEB",
                color: "#333",
              }}
            >
              {b.text}
            </blockquote>
          );
        if (b.type === "ul")
          return (
            <ul key={i} style={{ paddingLeft: 20 }}>
              {b.items.map((it, k) => (
                <li key={k}>{it}</li>
              ))}
            </ul>
          );
        if (b.type === "ol")
          return (
            <ol key={i} style={{ paddingLeft: 20 }}>
              {b.items.map((it, k) => (
                <li key={k}>{it}</li>
              ))}
            </ol>
          );
        if (b.type === "a")
          return (
            <p key={i}>
              <a href={b.href} style={{ color: "#2C733C", fontWeight: 600 }}>
                {b.text || b.href}
              </a>
            </p>
          );
        return null;
      })}
    </div>
  );
}
