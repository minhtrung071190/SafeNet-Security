import { Quote, User } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
}

const Testimonial = ({ quote, name, title }: TestimonialProps) => {
  return (
    <div className="bg-neutral p-6 rounded-lg shadow-sm">
      <div className="text-accent mb-4">
        <Quote className="h-6 w-6" />
      </div>
      <p className="text-gray-700 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="text-gray-500 h-6 w-6" />
          </div>
        </div>
        <div>
          <p className="font-bold text-primary">{name}</p>
          <p className="text-sm text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "SafeNet Security's vulnerability assessment uncovered critical issues that could have resulted in a major data breach. Their team was professional and thorough.",
      name: "Michael Johnson",
      title: "CIO, Healthcare Provider"
    },
    {
      quote: "The security awareness program drastically reduced our susceptibility to phishing attacks. Our employees now understand their role in our security infrastructure.",
      name: "Sarah Williams",
      title: "CISO, Financial Services"
    },
    {
      quote: "SafeNet guided us through our ISO 27001 certification process efficiently. Their expertise made a complex process manageable and straightforward.",
      name: "David Chen",
      title: "Director of IT, Manufacturing"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We've helped organizations of all sizes strengthen their security posture.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
