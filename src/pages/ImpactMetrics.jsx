// src/pages/ImpactMetrics.jsx
import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  monthlyImpact,
  programBreakdown,
  quarterly,
  kpis,
} from "../data/impact";

const COLORS = ["#2C733C", "#86CDEB", "#E0D085"]; // brand-ish palette

export default function ImpactMetrics() {
  return (
    <div style={{ padding: 24, maxWidth: 1200, margin: "0 auto" }}>
      <h1>Impact Metrics</h1>
      <p style={{ color: "#555", maxWidth: 820 }}>
        A snapshot of our outcomes across programs. These charts auto-scale and
        are mobile-friendly.
      </p>

      {/* KPI cards */}
      <section
        style={{
          marginTop: 16,
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        }}
      >
        {kpis.map((k) => (
          <div
            key={k.label}
            style={{
              border: "1px solid #eee",
              borderRadius: 12,
              padding: 16,
              background: "#fafafa",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 800 }}>
              {formatNumber(k.value)}
            </div>
            <div style={{ fontSize: 12, color: "#666" }}>{k.label}</div>
          </div>
        ))}
      </section>

      {/* Line: People served over time */}
      <section style={{ marginTop: 24 }}>
        <h2>People Served (Monthly)</h2>
        <div
          style={{
            width: "100%",
            height: 300,
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 8,
            background: "#fff",
          }}
        >
          <ResponsiveContainer>
            <LineChart
              data={monthlyImpact}
              margin={{ top: 12, right: 16, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="people"
                stroke={COLORS[1]}
                strokeWidth={3}
                dot={{ r: 3 }}
                name="People"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Pie: Program distribution */}
      <section style={{ marginTop: 24 }}>
        <h2>Program Distribution (Year-to-Date)</h2>
        <div
          style={{
            width: "100%",
            height: 320,
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 8,
            background: "#fff",
          }}
        >
          <ResponsiveContainer>
            <PieChart>
              <Tooltip />
              <Legend />
              <Pie
                data={programBreakdown}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {programBreakdown.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Bars: Volunteer hours vs Donations */}
      <section style={{ marginTop: 24 }}>
        <h2>Volunteer Hours & Donations by Quarter</h2>
        <div
          style={{
            width: "100%",
            height: 320,
            border: "1px solid #eee",
            borderRadius: 12,
            padding: 8,
            background: "#fff",
          }}
        >
          <ResponsiveContainer>
            <BarChart
              data={quarterly}
              margin={{ top: 12, right: 16, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="q" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip
                formatter={(val, name) =>
                  name.includes("donations") ? currency(val) : val
                }
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="volunteerHours"
                name="Volunteer Hours"
                fill={COLORS[0]}
              />
              <Bar
                yAxisId="right"
                dataKey="donationsUSD"
                name="Donations (USD)"
                fill={COLORS[2]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p style={{ marginTop: 8, fontSize: 12, color: "#666" }}>
          Tip: Hover or tap bars for exact values.
        </p>
      </section>

      {/* CTA to dig deeper */}
      <section style={{ marginTop: 24, textAlign: "center" }}>
        <a href="/case-studies" style={btnSecondary}>
          Read Case Studies
        </a>
        <a href="/donate" style={{ ...btnSecondary, marginLeft: 8 }}>
          Support the Work
        </a>
      </section>
    </div>
  );
}

/* ---------- helpers & styles ---------- */

function formatNumber(v) {
  if (typeof v === "number") return v.toLocaleString();
  return v;
}
function currency(v) {
  try {
    return `$${Number(v).toLocaleString()}`;
  } catch {
    return v;
  }
}

const btnSecondary = {
  display: "inline-block",
  padding: "10px 14px",
  background: "#86CDEB",
  color: "#000",
  borderRadius: 10,
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};
