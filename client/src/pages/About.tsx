import AboutSection from "@/components/about/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const About = () => {
  const team = [
    {
      name: "John Smith",
      title: "Chief Executive Officer",
      certifications: ["CISSP", "MBA"],
      bio: "With over 20 years in cybersecurity, John has led security programs for Fortune 500 companies before founding SafeNet Security.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Sarah Johnson",
      title: "Chief Information Security Officer",
      certifications: ["CISSP", "CEH", "CISM"],
      bio: "Sarah's expertise in penetration testing and incident response has helped numerous organizations strengthen their security posture.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Michael Chen",
      title: "Security Training Director",
      certifications: ["SANS GIAC", "CEH"],
      bio: "Michael specializes in creating engaging security awareness programs that transform organizational security culture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
    },
    {
      name: "Lisa Rodriguez",
      title: "Compliance & Risk Manager",
      certifications: ["CISA", "CRISC"],
      bio: "Lisa helps organizations navigate complex regulatory requirements and implement effective risk management strategies.",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get to know our team of cybersecurity experts dedicated to protecting your digital assets
          </p>
        </div>
      </section>

      <AboutSection />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our team of certified security professionals brings decades of experience to every client engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-neutral rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-2">{member.title}</p>
                  <div className="flex mb-3">
                    {member.certifications.map((cert, i) => (
                      <span key={i} className="bg-primary text-white text-xs px-2 py-1 rounded mr-1">
                        {cert}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-primary mb-4">
                Our Values
              </h2>
              <p className="text-lg text-gray-700">
                These core principles guide everything we do at SafeNet Security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We strive for excellence in every security assessment, implementation, and client interaction.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Integrity</h3>
                <p className="text-gray-700">
                  We maintain the highest ethical standards and always act in our clients' best interests.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-heading text-xl font-bold text-primary mb-3">Innovation</h3>
                <p className="text-gray-700">
                  We continuously evolve our methods to stay ahead of emerging security threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default About;
