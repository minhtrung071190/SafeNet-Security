import { Link } from "wouter";
import { ReactNode } from "react";

export interface ServiceCardProps {
  id: string;
  title: string;
  icon: ReactNode;
  description: string;
  points: string[];
  extras?: ReactNode;
}

const ServiceCard = ({ id, title, icon, description, points, extras }: ServiceCardProps) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="bg-primary p-4 text-white">
        <div className="flex items-center">
          <div className="rounded-full bg-white p-3 mr-4 text-primary">
            {icon}
          </div>
          <h3 className="font-heading text-2xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-4 text-gray-700">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-heading text-lg font-bold text-secondary mb-2">
            {id === "vulnerability" || id === "risk" ? "Our Approach:" : "Our Programs Include:"}
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
        
        {extras && (
          <div className="mb-6">
            {extras}
          </div>
        )}
        
        <Link href="/contact">
          <a className="inline-block px-6 py-2 bg-secondary hover:bg-teal-700 text-white font-bold rounded transition duration-300">
            Learn More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
