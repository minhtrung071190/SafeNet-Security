import { 
  ShieldCheck, 
  Users, 
  RefreshCcw 
} from "lucide-react";

const IntroSection = () => {
  const features = [
    {
      icon: <ShieldCheck className="h-12 w-12" />,
      title: "Proactive Protection",
      description: "We identify vulnerabilities before attackers can exploit them."
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Expert Team",
      description: "Our certified professionals bring decades of security experience."
    },
    {
      icon: <RefreshCcw className="h-12 w-12" />,
      title: "24/7 Support",
      description: "Around-the-clock monitoring and rapid incident response."
    }
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            Your Trusted Cybersecurity Partner
          </h2>
          <p className="text-lg text-gray-700 mb-10">
            SafeNet Security delivers enterprise-grade security solutions tailored to businesses of all sizes. 
            With certified professionals and cutting-edge technologies, we help you stay protected in an 
            increasingly complex threat landscape.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 text-center">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md transform hover:-translate-y-1 transition duration-300"
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
