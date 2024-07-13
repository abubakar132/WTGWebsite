import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component import
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import ProjectsComp from "./components/Projects/ProjectsComp.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Careers from "./components/Careers.jsx";
import Footer from "./components/Footer/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ProjectsComp />
      <Careers/>
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default App;
