// src/App.js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProgramsIndex from "./pages/ProgramsIndex";
import ProgramDetail from "./pages/ProgramDetail";
import Donate from "./pages/Donate";
import GetInvolved from "./pages/GetInvolved";
import Advocacy from "./pages/Advocacy";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import PastEvents from "./pages/PastEvents";
import EventSponsorship from "./pages/EventSponsorship";
import Testimonials from "./pages/Testimonials";
import CaseStudies from "./pages/CaseStudies";
import ImpactMetrics from "./pages/ImpactMetrics";
import News from "./pages/News";
import Post from "./pages/Post";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import FAQ from "./pages/FAQ";
import Accessibility from "./pages/Accessibility";

function Home() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/programs/youth-mentorship">Program: Youth Mentorship</Link>
        </li>
      </ul>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, borderBottom: "1px solid #eee" }}>
        <Link to="/" style={{ marginRight: 12 }}>
          Home
        </Link>
        <Link to="/programs" style={{ marginRight: 12 }}>
          Programs
        </Link>
        <Link to="/donate" style={{ marginRight: 12 }}>
          Donate
        </Link>
        <Link to="/get-involved" style={{ marginRight: 12 }}>
          Get Involved
        </Link>
        <Link to="/advocacy" style={{ marginRight: 12 }}>
          Advocacy
        </Link>
        <Link to="/membership">Membership/Sponsorship</Link>
        <Link to="/events" style={{ marginRight: 12 }}>
          Events
        </Link>
        <Link to="/past-events" style={{ marginRight: 12 }}>
          Past Events
        </Link>
        <Link to="/event-sponsorship" style={{ marginRight: 12 }}>
          Event Sponsorship
        </Link>
        <Link to="/testimonials" style={{ marginRight: 12 }}>
          Testimonials
        </Link>
        <Link to="/case-studies" style={{ marginRight: 12 }}>
          Case Studies
        </Link>
        <Link to="/impact-metrics" style={{ marginRight: 12 }}>
          Impact Metrics
        </Link>
        <Link to="/news" style={{ marginRight: 12 }}>
          News
        </Link>
        <Link to="/contact" style={{ marginRight: 12 }}>
          Contact
        </Link>
        <Link to="/privacy" style={{ marginRight: 12 }}>
          Privacy
        </Link>
        <Link to="/terms" style={{ marginRight: 12 }}>
          Terms
        </Link>
        <Link to="/faq" style={{ marginRight: 12 }}>
          FAQ
        </Link>
        <Link to="/accessibility">Accessibility</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<ProgramsIndex />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/advocacy" element={<Advocacy />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/events" element={<Events />} />
        <Route path="/past-events" element={<PastEvents />} />
        <Route path="/event-sponsorship" element={<EventSponsorship />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/impact-metrics" element={<ImpactMetrics />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/accessibility" element={<Accessibility />} />
      </Routes>
      <footer
        style={{
          marginTop: 40,
          padding: 16,
          borderTop: "1px solid #eee",
          textAlign: "center",
          fontSize: 14,
          color: "#666",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/faq">FAQ</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/contact">Contact</a>
        </div>
        <div style={{ marginTop: 8 }}>
          © {new Date().getFullYear()} Community Impact Initiative
        </div>
      </footer>
    </BrowserRouter>
  );
}
