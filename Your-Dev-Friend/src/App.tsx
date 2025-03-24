import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Screens/Home";
import ServicesPage from "./components/Services/Services";
import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import ContactPage from "./components/Services/ContactPage";
import ExpertiseSection from "./components/Services/ExpertiseSection";
import Testimonials from "./Screens/Testimonial";
import UnderConstruction from "./components/ui/UnderContruction";
import OurWork from "./Screens/OurWork";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicies";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/solutions" element={<ExpertiseSection />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
        <Route path="/ServiceTerms" element={<UnderConstruction />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
