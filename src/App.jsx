import React from "react";
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
  // logic here
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Collections />
      <OurStory />
      <Craftsmanship />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
