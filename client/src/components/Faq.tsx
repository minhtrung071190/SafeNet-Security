import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="py-6 border-b border-gray-200 last:border-b-0">
    <button 
      className="flex justify-between items-center w-full text-left"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium text-navy-blue">{question}</h3>
      {isOpen ? (
        <ChevronUp className="h-5 w-5 text-gray-500" />
      ) : (
        <ChevronDown className="h-5 w-5 text-gray-500" />
      )}
    </button>
    <div 
      className={`mt-3 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}
      aria-hidden={!isOpen}
    >
      <p>{answer}</p>
    </div>
  </div>
);

const Faq: React.FC = () => {
  const faqs = [
    {
      question: "When will SafeNet Security be available?",
      answer: "We're currently in final beta testing and plan to launch in Q3 2023. Join our waitlist to be among the first to access our platform and receive exclusive early adopter benefits."
    },
    {
      question: "Is SafeNet suitable for small businesses?",
      answer: "Absolutely! SafeNet Security offers plans specifically designed for small businesses. Our platform scales to your needs, providing enterprise-grade security at an affordable price point with simplified management."
    },
    {
      question: "How does SafeNet integrate with existing systems?",
      answer: "SafeNet is designed with interoperability in mind. We offer extensive API support, pre-built integrations with popular platforms like Microsoft 365, Google Workspace, Salesforce, and more. Our team also provides custom integration services for enterprise clients."
    },
    {
      question: "What compliance standards does SafeNet support?",
      answer: "Our platform supports GDPR, HIPAA, PCI DSS, SOC 2, NIST, and ISO 27001 frameworks. We provide built-in compliance tooling, automated reporting, and documentation to simplify your regulatory requirements."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our security platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
