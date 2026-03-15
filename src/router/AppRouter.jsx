import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Research from "../pages/Research/Research";
import Teaching from "../pages/Teaching/Teaching";
import Projects from "../pages/Projects/Projects";
import { GiPublicSpeaker } from "react-icons/gi";
import Publications from "../pages/Publications/Publications";
import Contact from "../pages/Contact/Contact";
import ActiveMembers from "../pages/Students/ActiveMembers/ActiveMembers";
import Alumni from "../pages/Students/Alumni/Alumni";
import MetricsTracker from "../pages/Admin/MetricsTracker";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/research" element={<Research />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/active-members" element={<ActiveMembers />} />
      <Route path="/alumni" element={<Alumni />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/metrics" element={<MetricsTracker />} />
    </Routes>
  );
}
