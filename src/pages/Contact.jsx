// src/pages/Contact.jsx
import React, { useState } from "react";

const ORG_EMAIL = "hello@nonprofit.org"; // ← change me
const ORG_PHONE = "(615) 555-0123"; // ← change me
const ORG_PHONE_LINK = "+16155550123"; // ← change me as E.164
const ORG_ADDRESS = "123 Example Ave, Nashville, TN 37210"; // ← change me

const SOCIALS = [
  { name: "Facebook", href: "https://facebook.com/yourpage" },
  { name: "Instagram", href: "https://instagram.com/yourpage" },
  { name: "X (Twitter)", href: "https://twitter.com/yourpage" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/yourpage" },
  { name: "YouTube", href: "https://youtube.com/@yourpage" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please add a subject.";
    if (form.message.trim().length < 10)
      return "Message should be at least 10 characters.";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErr(v);
      setOk(false);
      return;
    }
    setErr("");
    setSending(true);

    try {
      // Placeholder: POST to your backend / Formspree / EmailJS later
      console.log("Contact form submission:", form);

      // Example mailto fallback (opens email client with prefilled body)
      // const mailto = `mailto:${ORG_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`)}`;
      // window.location.href = mailto;

      setOk(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (e) {
      console.error(e);
      setErr(
        "Sorry, something went wrong. Please try again or email us directly."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ padding: 24, maxWidth: 1100, margin: "0 auto" }}>
      <h1>Contact Us</h1>
      <p style={{ color: "#555", maxWidth: 760 }}>
        We’d love to hear from you. Send a message, call, or visit our office.
      </p>

      <div
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "1fr",
        }}
      >
        {/* Form + Details in a responsive two-column on wide screens */}
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "minmax(280px, 1fr) minmax(260px, 380px)",
          }}
        >
          {/* Form */}
          <section
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fafafa",
            }}
          >
            <h2 style={{ marginTop: 0 }}>Send a Message</h2>
            <form onSubmit={onSubmit} noValidate>
              <label style={label}>
                Name
                <input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  style={input}
                  required
                />
              </label>

              <label style={label}>
                Email
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  style={input}
                  required
                />
              </label>

              <label style={label}>
                Subject
                <input
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="What’s this about?"
                  style={input}
                  required
                />
              </label>

              <label style={label}>
                Message
                <textarea
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  placeholder="How can we help?"
                  style={{ ...input, height: "auto" }}
                  required
                />
              </label>

              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    padding: "10px 14px",
                    background: sending ? "#9bcfe8" : "#86CDEB",
                    color: "#000",
                    border: "none",
                    borderRadius: 8,
                    cursor: sending ? "not-allowed" : "pointer",
                    fontWeight: 700,
                  }}
                >
                  {sending ? "Sending…" : "Send Message"}
                </button>
                {ok && (
                  <span style={{ color: "green" }}>
                    Thanks! We’ll be in touch soon.
                  </span>
                )}
                {err && <span style={{ color: "crimson" }}>{err}</span>}
              </div>

              <p style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
                By submitting, you consent to us contacting you about your
                inquiry.
              </p>
            </form>
          </section>

          {/* Contact details */}
          <aside
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}
          >
            <h2 style={{ marginTop: 0 }}>Reach Us</h2>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${ORG_EMAIL}`}>{ORG_EMAIL}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${ORG_PHONE_LINK}`}>{ORG_PHONE}</a>
            </p>
            <p>
              <strong>Address:</strong>
              <br />
              {ORG_ADDRESS}
            </p>

            <div style={{ marginTop: 12 }}>
              <h3 style={{ margin: "8px 0" }}>Follow</h3>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={chip}
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Google Maps embed */}
        <section
          style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
        >
          <h2 style={{ marginTop: 0 }}>Find Us</h2>
          <div
            style={{
              position: "relative",
              paddingTop: "56.25%",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                ORG_ADDRESS
              )}&output=embed`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                ORG_ADDRESS
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#2C733C", fontWeight: 600 }}
            >
              Open in Google Maps →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

const label = { display: "block", marginTop: 10, fontWeight: 600 };
const input = {
  width: "100%",
  padding: 10,
  marginTop: 4,
  borderRadius: 8,
  border: "1px solid #ccc",
};
const chip = {
  fontSize: 12,
  background: "#eee",
  borderRadius: 999,
  padding: "6px 10px",
  textDecoration: "none",
  color: "#333",
};
