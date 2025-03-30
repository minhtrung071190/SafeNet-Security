import React from "react";
import { Shield } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-navy-blue via-navy-blue to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 animate-in fade-in duration-500">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white drop-shadow-lg bg-navy-blue/80 p-4 rounded-lg shadow-lg border-l-4 border-orange">
              Advanced Security Solutions for the Modern Enterprise
            </h1>
            <p className="text-xl md:text-2xl text-white font-medium mb-8 leading-relaxed bg-navy-blue/80 p-4 rounded-md shadow-lg border-l-4 border-teal max-w-2xl">
              Protect your digital assets with next-generation security technology powered by AI and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("waitlist")}
                className="bg-orange hover:bg-orange/90 text-white px-8 py-3 rounded-md font-medium text-center transition-all shadow-lg border border-orange/30"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="bg-teal hover:bg-teal/90 text-white px-8 py-3 rounded-md font-medium text-center transition-all shadow-lg border border-white/20"
              >
                Explore Features
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-in slide-in-from-bottom duration-500">
            <div className="relative bg-white/10 p-8 rounded-xl shadow-2xl border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/30 to-orange/30 rounded-xl"></div>
              <div className="relative z-10">
                <Shield className="w-64 h-64 text-white drop-shadow-lg" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-navy-blue/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
