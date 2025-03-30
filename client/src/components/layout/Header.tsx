import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useMobile } from "@/hooks/use-mobile";
import { 
  ShieldCheck, 
  Menu, 
  ChevronDown, 
  ChevronUp 
} from "lucide-react";

const Header = () => {
  const [location] = useLocation();
  const isMobile = useMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="text-primary mr-2">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-primary">SafeNet</span>
                <span className="font-heading text-xl font-bold text-secondary">Security</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <a className={`font-heading ${location === '/' ? 'text-secondary' : 'text-primary'} hover:text-secondary transition duration-300 font-semibold`}>
                Home
              </a>
            </Link>
            <div className="relative group">
              <Link href="/services">
                <a className={`font-heading ${location === '/services' ? 'text-secondary' : 'text-primary'} hover:text-secondary transition duration-300 font-semibold flex items-center`}>
                  Services
                  <ChevronDown className="h-4 w-4 ml-1" />
                </a>
              </Link>
              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
                <div className="py-2 px-3 divide-y divide-gray-200">
                  <Link href="/services#vulnerability">
                    <a className="block py-2 text-sm text-gray-700 hover:bg-neutral hover:text-secondary rounded transition">
                      Vulnerability Assessment
                    </a>
                  </Link>
                  <Link href="/services#training">
                    <a className="block py-2 text-sm text-gray-700 hover:bg-neutral hover:text-secondary rounded transition">
                      Security Awareness Training
                    </a>
                  </Link>
                  <Link href="/services#firewall">
                    <a className="block py-2 text-sm text-gray-700 hover:bg-neutral hover:text-secondary rounded transition">
                      Firewall & Endpoint Security
                    </a>
                  </Link>
                  <Link href="/services#risk">
                    <a className="block py-2 text-sm text-gray-700 hover:bg-neutral hover:text-secondary rounded transition">
                      Risk Assessment & Compliance
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about">
              <a className={`font-heading ${location === '/about' ? 'text-secondary' : 'text-primary'} hover:text-secondary transition duration-300 font-semibold`}>
                About Us
              </a>
            </Link>
            <Link href="/resources">
              <a className={`font-heading ${location === '/resources' ? 'text-secondary' : 'text-primary'} hover:text-secondary transition duration-300 font-semibold`}>
                Resources
              </a>
            </Link>
            <Link href="/contact">
              <a className={`font-heading ${location === '/contact' ? 'text-secondary' : 'text-primary'} hover:text-secondary transition duration-300 font-semibold`}>
                Contact
              </a>
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/contact">
              <a className="px-6 py-2 bg-accent hover:bg-orange-500 text-white font-bold rounded transition duration-300">
                Free Consultation
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-primary focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
            <div className="flex flex-col space-y-3">
              <Link href="/">
                <a className="font-heading text-primary py-2 border-b border-gray-200">
                  Home
                </a>
              </Link>
              <div className="py-2 border-b border-gray-200">
                <div 
                  onClick={toggleMobileServices}
                  className="font-heading text-primary flex justify-between items-center cursor-pointer"
                >
                  <span>Services</span>
                  {mobileServicesOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </div>
                <div className={`pl-4 mt-2 space-y-2 ${mobileServicesOpen ? 'block' : 'hidden'}`}>
                  <Link href="/services#vulnerability">
                    <a className="block text-sm text-gray-700">
                      Vulnerability Assessment
                    </a>
                  </Link>
                  <Link href="/services#training">
                    <a className="block text-sm text-gray-700">
                      Security Awareness Training
                    </a>
                  </Link>
                  <Link href="/services#firewall">
                    <a className="block text-sm text-gray-700">
                      Firewall & Endpoint Security
                    </a>
                  </Link>
                  <Link href="/services#risk">
                    <a className="block text-sm text-gray-700">
                      Risk Assessment & Compliance
                    </a>
                  </Link>
                </div>
              </div>
              <Link href="/about">
                <a className="font-heading text-primary py-2 border-b border-gray-200">
                  About Us
                </a>
              </Link>
              <Link href="/resources">
                <a className="font-heading text-primary py-2 border-b border-gray-200">
                  Resources
                </a>
              </Link>
              <Link href="/contact">
                <a className="font-heading text-primary py-2 border-b border-gray-200">
                  Contact
                </a>
              </Link>
              <Link href="/contact">
                <a className="py-2 mt-2 bg-accent hover:bg-orange-500 text-white font-bold rounded text-center transition duration-300">
                  Free Consultation
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
