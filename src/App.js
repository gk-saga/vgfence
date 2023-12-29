import logo from "./logo.svg";
import "./App.css";
import "animate.css/animate.css";
import WOW from "wowjs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { useEffect } from "react";
import { Contactus } from "./pages/Contactus";
import { TemporaryFence } from "./pages/TemporaryFence";
import { Blogs } from "./pages/Blogs";
import { Careers } from "./pages/Careers";
import { Vendor } from "./pages/Vendor";
import { DesignSolutions } from "./pages/DesignSolutions";
import { Contract } from "./pages/Contract";
import { TempFenceRental } from "./pages/TempFenceRental";
import { PrivacyFence } from "./pages/PrivacyFence";

function App() {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/temporary-fence" element={<TemporaryFence />} />
          <Route path="/privacy-fence" element={<PrivacyFence />} />
          <Route path="/temporary-fence-rental" element={<TempFenceRental />} />
          <Route path="/design-solutions" element={<DesignSolutions />} />
          <Route path="/contract-manufacturing" element={<Contract />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/vendor" element={<Vendor />} />
          <Route path="/contact" element={<Contactus />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
