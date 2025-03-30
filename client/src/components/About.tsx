import React from "react";
import { CheckCircle2 } from "lucide-react";

interface BenefitProps {
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ title, description }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">
      <CheckCircle2 className="h-5 w-5 text-orange" />
    </div>
    <div className="ml-3">
      <h3 className="text-lg font-medium text-navy-blue">{title}</h3>
      <p className="mt-1 text-gray-600">{description}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  const benefits = [
    {
      title: "Industry-Leading Expertise",
      description: "Our team includes top cybersecurity experts with decades of combined experience."
    },
    {
      title: "Comprehensive Protection",
      description: "End-to-end security covering everything from network infrastructure to cloud applications."
    },
    {
      title: "Scalable Solutions",
      description: "Our platform grows with your business, from small teams to enterprise operations."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock security monitoring and technical support whenever you need it."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute inset-0 bg-navy-blue/20 rounded-xl translate-x-2 translate-y-2"></div>
              <div className="relative bg-navy-blue/80 rounded-xl p-12 text-white shadow-md">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="col-span-1 bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-3xl font-bold">99.9%</div>
                    <div className="text-sm">Uptime</div>
                  </div>
                  <div className="col-span-1 bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-sm">Monitoring</div>
                  </div>
                  <div className="col-span-1 bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-3xl font-bold">100+</div>
                    <div className="text-sm">Threat Types</div>
                  </div>
                  <div className="col-span-1 bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-3xl font-bold">15min</div>
                    <div className="text-sm">Response Time</div>
                  </div>
                </div>
                <div className="text-center font-medium">
                  Protecting businesses worldwide with advanced security solutions
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-6">
              Why Choose SafeNet Security?
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <Benefit
                  key={index}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
