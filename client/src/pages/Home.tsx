import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Faq />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
