// src/pages/ProgramsIndex.jsx
import { Link } from "react-router-dom";
import { programs } from "../data/programs";

export default function ProgramsIndex() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Programs & Services</h1>
      <p>
        Browse programs, then open one to view <strong>Goals & Impact</strong>.
      </p>

      <ul>
        {programs.map((p) => (
          <li key={p.id} style={{ margin: "12px 0" }}>
            <Link to={`/programs/${p.id}`}>{p.name}</Link>
            <div style={{ color: "#555" }}>{p.overview}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
