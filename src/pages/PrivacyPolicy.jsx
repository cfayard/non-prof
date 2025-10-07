import React from "react";

export default function PrivacyPolicy() {
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Privacy Policy</h1>
      <p style={{ color: "#555" }}>Last updated: October 2025</p>

      <p>
        We respect your privacy. This policy explains what information we
        collect, how we use it, and the choices you have.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          <strong>Contact info</strong> (name, email, phone) when you submit
          forms.
        </li>
        <li>
          <strong>Donor details</strong> (amount, frequency) if you donate via
          our processor.
        </li>
        <li>
          <strong>Usage data</strong> (pages visited, device/browser) via
          analytics cookies.
        </li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>Respond to inquiries and provide services you request.</li>
        <li>Send updates you opt into (you can unsubscribe anytime).</li>
        <li>Improve our website and programs.</li>
        <li>Process donations securely via third-party payment processors.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with service
        providers (e.g., email, payment, analytics) who are obligated to protect
        it and use it only for our purposes, or when required by law.
      </p>

      <h2>Cookies & Analytics</h2>
      <p>
        We may use cookies or similar technologies to understand usage and
        improve the site. You can control cookies in your browser settings.
      </p>

      <h2>Your Choices & Rights</h2>
      <ul>
        <li>Access, correct, or delete your information.</li>
        <li>Opt out of marketing emails.</li>
        <li>
          Contact us to exercise rights: <a href="/contact">Contact</a>.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect your
        information. No method is 100% secure; please contact us if you have
        concerns.
      </p>

      <h2>Children’s Privacy</h2>
      <p>
        We don’t knowingly collect personal information from children under 13
        without appropriate consent. Please contact us if you believe a child
        provided data.
      </p>

      <h2>International Users</h2>
      <p>
        If you access the site from outside the U.S., your data may be processed
        in the U.S. where laws may differ from your jurisdiction.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy. The “Last updated” date reflects the latest
        revision.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? <a href="/contact">Reach us here</a>.
      </p>
    </div>
  );
}
