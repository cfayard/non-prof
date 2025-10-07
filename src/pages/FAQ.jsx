import React, { useState } from "react";

const QA = [
  {
    q: "What programs do you offer?",
    a: "Youth mentorship, community food markets, and tech training. See the Programs page for details.",
  },
  {
    q: "How can I volunteer?",
    a: "Visit the Get Involved → Volunteer page to browse roles and sign up.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "Yes, to the extent allowed by law. You will receive a receipt for your records.",
  },
  {
    q: "Do you accept in-kind donations?",
    a: "Yes—laptops, monitors, food, and event supplies are especially helpful. Please contact us.",
  },
  {
    q: "How do I become a sponsor or member?",
    a: "See Membership/Sponsorship for tiers, benefits, and a quick interest form.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>FAQ</h1>
      <p style={{ color: "#555" }}>
        Quick answers to common questions. Still need help?{" "}
        <a href="/contact">Contact us</a>.
      </p>

      <div style={{ marginTop: 16 }}>
        {QA.map((item, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              marginBottom: 10,
              background: "#fafafa",
            }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: "100%",
                textAlign: "left",
                background: "transparent",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontSize: 16,
                fontWeight: 700,
              }}
              aria-expanded={open === i}
            >
              {item.q}
            </button>
            {open === i && (
              <p style={{ marginTop: 8, color: "#333" }}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
