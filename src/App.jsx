// src/App.jsx
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Components and Pages
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    // IMPORTANT: Add basename="/my-Portfolio25"
    <Router basename="/my-Portfolio25">
      <Routes>
        {/* Main layout route with nested routes */}
        <Route path="/" element={<Layout />}>
          {/* Index route (homepage) */}
          <Route index element={<Home />} />

          {/* Other page routes */}
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

          {/* Fallback route -> redirect any unmatched path to "/" */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;