import { Award } from "lucide-react";

const TrustIndicators = () => {
  const certifications = ["ISO 27001", "CISSP", "CEH", "PCI DSS"];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl font-bold text-primary mb-2">
            Trusted By Industry Leaders
          </h2>
          <p className="text-gray-600">
            Partnering with leading organizations to deliver exceptional security outcomes
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-32 grayscale hover:grayscale-0 transition duration-300">
              <svg
                viewBox="0 0 120 60"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="120" height="60" fill="#E5E7EB" />
                <text
                  x="60"
                  y="30"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#6B7280"
                  fontSize="12"
                  fontFamily="sans-serif"
                >
                  COMPANY
                </text>
              </svg>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-neutral p-3 rounded-lg flex items-center">
              <Award className="text-secondary mr-2 h-5 w-5" />
              <span className="text-primary font-bold">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
