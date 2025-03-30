import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative bg-primary text-white py-20">
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]" 
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Protecting Your Digital Assets
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            Comprehensive cybersecurity solutions to safeguard your business from evolving threats.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <a className="px-8 py-3 bg-accent hover:bg-orange-500 text-white font-bold rounded-md text-center transition duration-300">
                Get Free Consultation
              </a>
            </Link>
            <Link href="/services">
              <a className="px-8 py-3 bg-white hover:bg-gray-100 text-primary font-bold rounded-md text-center transition duration-300">
                Our Services
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
