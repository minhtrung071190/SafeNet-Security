import { Link } from "wouter";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Strengthen Your Security Posture?
          </h2>
          <p className="text-xl mb-8">
            Schedule a free consultation with our security experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/contact">
              <a className="px-8 py-3 bg-accent hover:bg-orange-500 text-white font-bold rounded-md text-center transition duration-300">
                Get Free Consultation
              </a>
            </Link>
            <a 
              href="tel:+18005551234" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-primary font-bold rounded-md text-center transition duration-300"
            >
              Call Us: (800) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
