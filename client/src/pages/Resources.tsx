import { useState } from "react";
import ResourceCard from "@/components/resources/ResourceCard";
import CTASection from "@/components/home/CTASection";

const Resources = () => {
  const [filter, setFilter] = useState("all");

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
    },
    {
      type: "ARTICLE",
      date: "February 18, 2023",
      title: "Securing Remote Work Environments",
      description: "Best practices for maintaining security with a distributed workforce in the post-pandemic era.",
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      type: "GUIDE",
      date: "January 25, 2023",
      title: "Cloud Security Implementation Guide",
      description: "Step-by-step guidance for securing your cloud infrastructure and applications.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      type: "WHITEPAPER",
      date: "December 12, 2022",
      title: "The State of Cybersecurity: 2022 Review",
      description: "Analysis of key security incidents, trends, and lessons learned from the past year.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  const filteredResources = filter === "all" 
    ? resources 
    : resources.filter(resource => resource.type === filter);

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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Resources & Insights</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity trends, threats, and best practices
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-primary mb-4 md:mb-0">
              Security Resources
            </h2>
            <div className="flex flex-wrap gap-2">
              <button 
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded font-bold transition duration-300 ${
                  filter === "all" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter("ARTICLE")}
                className={`px-4 py-2 rounded font-bold transition duration-300 ${
                  filter === "ARTICLE" ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Articles
              </button>
              <button 
                onClick={() => setFilter("GUIDE")}
                className={`px-4 py-2 rounded font-bold transition duration-300 ${
                  filter === "GUIDE" ? "bg-secondary text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Guides
              </button>
              <button 
                onClick={() => setFilter("WHITEPAPER")}
                className={`px-4 py-2 rounded font-bold transition duration-300 ${
                  filter === "WHITEPAPER" ? "bg-accent text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                Whitepapers
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={index}
                type={resource.type as "ARTICLE" | "GUIDE" | "WHITEPAPER"}
                date={resource.date}
                title={resource.title}
                description={resource.description}
                image={resource.image}
              />
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-700">No resources found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-primary mb-6">
              Subscribe to Our Security Newsletter
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Get the latest cybersecurity insights, threat updates, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-md w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary mb-2 sm:mb-0"
              />
              <button className="bg-accent hover:bg-orange-500 text-white font-bold px-6 py-3 rounded-r-md transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Resources;
