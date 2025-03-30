import React from "react";
import { 
  ShieldCheck, 
  Lock, 
  BarChart4, 
  Database, 
  Calendar, 
  Layers 
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-50 rounded-xl p-6 shadow-md transition-all border border-transparent hover:border-teal hover:translate-y-[-5px] hover:shadow-lg duration-300">
    <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-navy-blue mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-teal" />,
      title: "Advanced Threat Detection",
      description: "Identify and neutralize security threats before they impact your business with our AI-powered analysis engine."
    },
    {
      icon: <Lock className="h-6 w-6 text-teal" />,
      title: "Secure Authentication",
      description: "Multi-factor authentication and biometric verification ensure only authorized users access your systems."
    },
    {
      icon: <BarChart4 className="h-6 w-6 text-teal" />,
      title: "Real-time Monitoring",
      description: "Continuous surveillance of network traffic and system activity with instant alerts for suspicious behavior."
    },
    {
      icon: <Database className="h-6 w-6 text-teal" />,
      title: "Data Encryption",
      description: "End-to-end encryption for all sensitive data at rest and in transit, keeping your information secure."
    },
    {
      icon: <Calendar className="h-6 w-6 text-teal" />,
      title: "Automated Backups",
      description: "Scheduled backups with easy restoration options to protect against data loss and ransomware attacks."
    },
    {
      icon: <Layers className="h-6 w-6 text-teal" />,
      title: "Compliance Management",
      description: "Built-in tools to help maintain regulatory compliance with GDPR, HIPAA, PCI DSS, and other frameworks."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Comprehensive Security Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge technology with intuitive design to deliver unparalleled protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
