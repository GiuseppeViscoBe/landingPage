import React from "react";

import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import WorkFlowSection from "./components/WorkFlowSection";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import NavBar from './components/navbar';


const App = () => {
  return (
    <div>
      <>
        <NavBar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
          <HeroSection />
          <FeatureSection />
          <WorkFlowSection />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </>
    </div>
  );
};

export default App;
