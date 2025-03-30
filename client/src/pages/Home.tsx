import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { Link } from "wouter";
import { 
  Search, 
  UserCheck, 
  Shield, 
  ClipboardCheck,
  Laptop,
  FishOff,
  Award
} from "lucide-react";

const Home = () => {
  const services = [
    {
      id: "vulnerability",
      title: "Vulnerability Assessment & Penetration Testing",
      icon: <Search className="h-6 w-6" />,
      description: "Identify security gaps before malicious actors do",
    },
    {
      id: "training",
      title: "Security Awareness Training",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Turn your employees into your strongest security asset",
    },
    {
      id: "firewall",
      title: "Firewall & Endpoint Security",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect your network perimeter and critical endpoints",
    },
    {
      id: "risk",
      title: "Risk Assessment & Compliance",
      icon: <ClipboardCheck className="h-6 w-6" />,
      description: "Meet regulatory requirements and manage security risks",
    }
  ];

  const resources = [
    {
      type: "ARTICLE",
      date: "May 15, 2023",
      title: "Top 5 Cybersecurity Trends for 2023",
      description: "Stay ahead of evolving threats with our analysis of this year's most significant cybersecurity developments.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      type: "GUIDE",
      date: "April 22, 2023",
      title: "Ransomware Protection Guide",
      description: "Essential strategies to protect your organization from the growing ransomware threat landscape.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      type: "WHITEPAPER",
      date: "March 10, 2023",
      title: "GDPR Compliance Checklist",
      description: "Comprehensive guide to achieving and maintaining GDPR compliance for your organization.",
      image: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <>
      <Hero />
      <IntroSection />
      <TrustIndicators />

      {/* Services Section */}
      <section id="services" className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Our Comprehensive Security Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer end-to-end security solutions designed to protect your business at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary text-white p-3 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`}>
                  <a className="text-secondary hover:text-primary font-bold inline-flex items-center">
                    Learn More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7" 
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/services">
              <a className="inline-block px-6 py-3 bg-secondary hover:bg-teal-700 text-white font-bold rounded transition duration-300">
                View All Services
              </a>
            </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Resources Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Security Resources & Insights
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity trends, threats, and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-neutral rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`bg-${resource.type === "ARTICLE" ? "primary" : resource.type === "GUIDE" ? "secondary" : "accent"} text-white text-xs px-2 py-1 rounded mr-2`}>
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-sm">{resource.date}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{resource.title}</h3>
                  <p className="text-gray-700 mb-4">{resource.description}</p>
                  <Link href="/resources">
                    <a className="text-secondary hover:text-primary font-bold inline-flex items-center">
                      Read More
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 ml-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/resources">
              <a className="inline-block px-6 py-3 bg-primary hover:bg-blue-900 text-white font-bold rounded transition duration-300">
                View All Resources
              </a>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Home;
