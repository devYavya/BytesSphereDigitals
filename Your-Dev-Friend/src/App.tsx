import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Screens/Home";
import ServicesPage from "./components/Services/Services";
import Navbar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import ContactPage from "./components/Services/ContactPage";
import ExpertiseSection from "./components/Services/ExpertiseSection";
import Testimonials from "./Screens/Testimonial";
import OurWork from "./Screens/OurWork";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicies";
import TermsOfService from "./components/Privacy/TermsofService";
import { PageTransition } from "./components/ui/PageTransition";
import WebDevelopment from "./components/Services/WebDevelopment";
import NotFound from "./components/ui/NotFound";
import MobileDevelopment from "./components/Services/MobileDevelopment";
import SEOTesting from "./components/Services/SEOTesting";
import UXDesign from "./components/Services/UXDesign";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();
  const isNotFound =
    location.pathname !== "/" &&
    ![
      "/services",
      "/contact",
      "/solutions",
      "/testimonials",
      "/our-work",
      "/Privacy-Policy",
      "/ServiceTerms",
      "/WebDevelopment",
      "/UXDesign",
      "/MobileDevelopment",
      "/SEOTesting",
    ].includes(location.pathname);

  return (
    <>
      {!isNotFound && <Navbar />}
      <ScrollToTop />
      {!isNotFound ? (
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/solutions" element={<ExpertiseSection />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
            <Route path="/ServiceTerms" element={<TermsOfService />} />
            <Route path="/WebDevelopment" element={<WebDevelopment />} />
            <Route path="/UXDesign" element={<UXDesign />} />
            <Route path="/MobileDevelopment" element={<MobileDevelopment />} />
            <Route path="/SEOTesting" element={<SEOTesting />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </PageTransition>
      ) : (
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
};

export default App;
