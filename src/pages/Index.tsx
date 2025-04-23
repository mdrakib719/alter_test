
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Goals from "@/components/Goals";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Publications from "@/components/Publications";
import Achievements from "@/components/Achievements";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Goals />
      <Features />
      <Team />
      <Publications />
      <Achievements />
      <Gallery />
      <ScrollToTop />
    </Layout>
  );
};

export default Index;
