import React from "react";

export default function Accessibility() {
  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1>Accessibility Statement</h1>
      <p style={{ color: "#555" }}>Last updated: October 2025</p>

      <p>
        We’re committed to providing a website that is accessible to the widest
        possible audience, regardless of technology or ability. We aim to
        conform to
        <strong> WCAG 2.1 AA</strong> standards.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Semantic HTML and keyboard navigability</li>
        <li>Alt text for meaningful images</li>
        <li>Color contrast targeting WCAG AA</li>
        <li>Forms with labels and validation feedback</li>
        <li>Captions or transcripts for key videos (where provided)</li>
      </ul>

      <h2>Ongoing Improvements</h2>
      <p>
        We regularly review content and code for accessibility and welcome
        feedback to help us improve.
      </p>

      <h2>Having Trouble Accessing Something?</h2>
      <p>
        Please <a href="/contact">contact us</a> with a description of the issue
        and the page URL. We’ll make reasonable efforts to provide the content
        you need in an accessible format.
      </p>
    </div>
  );
}
