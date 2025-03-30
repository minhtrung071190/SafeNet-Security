import React from "react";
import logoImage from "@/images/logo.jpg";

interface LogoProps {
  className?: string;
}

// Updated to use the real SafeNet Security logo image
const Logo: React.FC<LogoProps> = ({ className = "h-10" }) => {
  return (
    <img 
      src={logoImage} 
      alt="SafeNet Security Logo" 
      className={`${className} object-contain`}
    />
  );
};

export default Logo;
