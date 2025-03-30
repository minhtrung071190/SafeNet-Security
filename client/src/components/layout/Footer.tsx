import { Link } from "wouter";
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail,
  Linkedin,
  Twitter,
  Facebook
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="text-white mr-2">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <span className="font-heading text-xl font-bold text-white">SafeNet</span>
                <span className="font-heading text-xl font-bold text-secondary">Security</span>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive cybersecurity solutions to protect your business from evolving threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#vulnerability">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Vulnerability Assessment
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services#training">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Security Awareness Training
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services#firewall">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Firewall & Endpoint Security
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services#risk">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Risk Assessment & Compliance
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Whitepapers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Case Studies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-gray-400 hover:text-white transition duration-300">
                    Security Tools
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>123 Security Avenue, Suite 500<br />Cybertown, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>(800) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                <span>info@safenetsecurity.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SafeNet Security. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-400 text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
