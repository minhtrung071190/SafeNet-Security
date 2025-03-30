import { Link } from "wouter";

const AboutSection = () => {
  const features = [
    {
      title: "Experience",
      description: "Over 12 years protecting businesses across sectors"
    },
    {
      title: "Team",
      description: "Certified professionals with diverse security expertise"
    },
    {
      title: "Approach",
      description: "Tailored security solutions for your specific needs"
    },
    {
      title: "Results",
      description: "Proven track record of strengthening security postures"
    }
  ];

  return (
    <section id="about" className="py-16 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              About SafeNet Security
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2010, SafeNet Security has grown to become a trusted cybersecurity partner for 
              businesses across industries. Our mission is to protect organizations from evolving cyber 
              threats through innovative security solutions and expert guidance.
            </p>
            
            <div className="mb-8">
              <h3 className="font-heading text-xl font-bold text-secondary mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with the security tools, knowledge, and support they need to protect 
                their digital assets in an increasingly complex threat landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-heading font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <Link href="/contact">
              <a className="inline-block px-6 py-3 bg-secondary hover:bg-teal-700 text-white font-bold rounded transition duration-300">
                Meet Our Team
              </a>
            </Link>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
                alt="SafeNet Security Team" 
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg text-white text-center shadow-lg hidden md:block">
              <div className="text-4xl font-bold">100+</div>
              <p className="text-sm">Security Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
