import { Link } from "wouter";

export interface ResourceCardProps {
  type: "ARTICLE" | "GUIDE" | "WHITEPAPER";
  date: string;
  title: string;
  description: string;
  image: string;
}

const ResourceCard = ({ type, date, title, description, image }: ResourceCardProps) => {
  // Get the appropriate background color for the type badge
  const getTypeColor = (type: string) => {
    switch (type) {
      case "ARTICLE":
        return "bg-primary";
      case "GUIDE":
        return "bg-secondary";
      case "WHITEPAPER":
        return "bg-accent";
      default:
        return "bg-primary";
    }
  };

  return (
    <div className="bg-neutral rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className={`${getTypeColor(type)} text-white text-xs px-2 py-1 rounded mr-2`}>
            {type}
          </span>
          <span className="text-gray-500 text-sm">{date}</span>
        </div>
        <h3 className="font-heading text-xl font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href="/resources">
          <a className="text-secondary hover:text-primary font-bold inline-flex items-center">
            Read More
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ResourceCard;
