import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import LoadingScreen from "./components/LoadingScreen";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <LoadingScreen onComplete={() => setLoading(false)} />
      <motion.div
        animate={{ opacity: loading ? 0 : 1, y: loading ? 24 : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="min-h-screen text-ink font-body selection:bg-rose"
      >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </motion.div>
    </BrowserRouter>
  );
}
