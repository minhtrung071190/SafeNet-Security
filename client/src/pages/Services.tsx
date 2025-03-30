import { 
  Search, 
  UserCheck, 
  Shield, 
  ClipboardCheck,
  Laptop,
  FishOff,
  Award
} from "lucide-react";

import ServiceCard from "@/components/services/ServiceCard";
import CTASection from "@/components/home/CTASection";

const Services = () => {
  const services = [
    {
      id: "vulnerability",
      title: "Vulnerability Assessment & Penetration Testing",
      icon: <Search className="h-6 w-6" />,
      description: "Our comprehensive security testing identifies vulnerabilities in your systems before malicious actors can exploit them.",
      points: [
        "In-depth scanning of networks, applications, and infrastructure",
        "Manual penetration testing by certified ethical hackers",
        "Detailed reports with prioritized remediation recommendations",
        "Post-remediation validation testing"
      ],
      extras: (
        <div className="bg-neutral p-4 rounded-md mb-6">
          <h4 className="font-heading text-lg font-bold text-primary mb-2">Client Success Story</h4>
          <p className="text-gray-600 italic">"SafeNet's penetration testing uncovered critical vulnerabilities that our previous security audits missed. Their detailed remediation plan helped us strengthen our security posture significantly."</p>
          <p className="text-right text-gray-500 mt-2">— Financial Services Client</p>
        </div>
      )
    },
    {
      id: "training",
      title: "Security Awareness Training",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Turn your employees into your strongest security asset with our comprehensive training programs.",
      points: [
        "Customized training modules for different roles and departments",
        "Simulated phishing campaigns with detailed analytics",
        "Interactive workshops and webinars",
        "Ongoing educational resources and certification"
      ],
      extras: (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-neutral p-3 rounded text-center">
            <div className="text-secondary text-xl mb-1">
              <Laptop className="h-5 w-5 mx-auto" />
            </div>
            <p className="text-sm text-gray-700">Interactive Learning</p>
          </div>
          <div className="bg-neutral p-3 rounded text-center">
            <div className="text-secondary text-xl mb-1">
              <FishOff className="h-5 w-5 mx-auto" />
            </div>
            <p className="text-sm text-gray-700">Phishing Simulations</p>
          </div>
          <div className="bg-neutral p-3 rounded text-center">
            <div className="text-secondary text-xl mb-1">
              <Award className="h-5 w-5 mx-auto" />
            </div>
            <p className="text-sm text-gray-700">Certification</p>
          </div>
        </div>
      )
    },
    {
      id: "firewall",
      title: "Firewall & Endpoint Security",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect your network perimeter and endpoints with advanced security solutions.",
      points: [
        "Next-generation firewall implementation and management",
        "Advanced endpoint protection with EDR capabilities",
        "24/7 monitoring and threat detection",
        "Rapid incident response and remediation"
      ],
      extras: (
        <div className="bg-neutral p-4 rounded-md mb-6">
          <h4 className="font-heading text-lg font-bold text-primary mb-2">Protection Highlights</h4>
          <div className="flex justify-between text-center mt-4">
            <div>
              <div className="text-accent font-bold text-xl">99.7%</div>
              <p className="text-sm text-gray-600">Threat Detection</p>
            </div>
            <div>
              <div className="text-accent font-bold text-xl">24/7</div>
              <p className="text-sm text-gray-600">Monitoring</p>
            </div>
            <div>
              <div className="text-accent font-bold text-xl">15min</div>
              <p className="text-sm text-gray-600">Response Time</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "risk",
      title: "Risk Assessment & Compliance",
      icon: <ClipboardCheck className="h-6 w-6" />,
      description: "Ensure regulatory compliance and manage security risks with our comprehensive assessment services.",
      points: [
        "Comprehensive gap analysis against relevant frameworks",
        "Risk scoring and prioritization",
        "Detailed remediation roadmap",
        "Implementation support and documentation"
      ],
      extras: (
        <div className="mb-6">
          <h4 className="font-heading text-lg font-bold text-secondary mb-2">Compliance Frameworks:</h4>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-neutral px-3 py-1 rounded text-sm">ISO 27001</span>
            <span className="bg-neutral px-3 py-1 rounded text-sm">GDPR</span>
            <span className="bg-neutral px-3 py-1 rounded text-sm">HIPAA</span>
            <span className="bg-neutral px-3 py-1 rounded text-sm">PCI DSS</span>
            <span className="bg-neutral px-3 py-1 rounded text-sm">NIST CSF</span>
            <span className="bg-neutral px-3 py-1 rounded text-sm">SOC 2</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <section className="relative bg-primary text-white py-16">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="h-full w-full bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]" 
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions to protect your business at every level
          </p>
        </div>
      </section>

      <section id="services" className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Our Comprehensive Security Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer end-to-end security solutions designed to protect your business at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                title={service.title}
                icon={service.icon}
                description={service.description}
                points={service.points}
                extras={service.extras}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
