import React from "react";
import { InquiryProvider } from "./context/InquiryContext";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Features from "./components/Features.jsx";
import Collections from "./components/Collections.jsx";
import OurStory from "./components/OurStory.jsx";
import Craftsmanship from "./components/Craftsmanship.jsx";
import Testimonials from "./components/Testimonials.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <InquiryProvider>
      {/* Decorative ambient glowing blur circles in background */}
      <div className="ambient-background">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
      </div>
      
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <HeroSection />
        <Features />
        <Collections />
        <OurStory />
        <Craftsmanship />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </InquiryProvider>
  );
};

export default App;
