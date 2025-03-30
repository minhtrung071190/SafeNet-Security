import React, { useState } from "react";
import { Link } from "wouter";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10 border-b-2 border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Logo className="h-12 w-auto" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-navy-blue hover:text-teal font-medium transition-all text-base"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="text-navy-blue hover:text-teal font-medium transition-all text-base"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-navy-blue hover:text-teal font-medium transition-all text-base"
            >
              FAQ
            </button>
          </nav>
          <button 
            onClick={() => scrollToSection("waitlist")} 
            className="bg-orange hover:bg-orange/90 text-white px-5 py-2 rounded-md font-medium transition-all shadow-md"
          >
            Join Waitlist
          </button>
          <button 
            className="md:hidden text-navy-blue" 
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu panel */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-lg border-t border-gray-100">
          <button 
            onClick={() => scrollToSection("features")} 
            className="block w-full text-left px-3 py-2 text-navy-blue hover:bg-light-gray rounded-md"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("about")} 
            className="block w-full text-left px-3 py-2 text-navy-blue hover:bg-light-gray rounded-md"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("faq")} 
            className="block w-full text-left px-3 py-2 text-navy-blue hover:bg-light-gray rounded-md"
          >
            FAQ
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
