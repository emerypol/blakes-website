import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./ScrollToTop";
import Privacy from "./Privacy";
import preloadImg from "/src/assets/blake_we_2_optimized.jpg";
import { useEffect } from "react";


function App() {
  useEffect(() => {
    const img = new Image()
    img.src = preloadImg
  }, [])
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;