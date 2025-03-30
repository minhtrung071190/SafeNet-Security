import { MapPin, Phone, Mail } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  const serviceAreas = [
    "New York", "Los Angeles", "Chicago", 
    "San Francisco", "Boston", "Washington DC"
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
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our security experts to protect your digital assets
          </p>
        </div>
      </section>

      <section id="contact" className="py-16 bg-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Have questions about our services or ready to get started? Contact our team for a 
                  personalized security consultation.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">Address</h3>
                      <p className="text-gray-700">
                        123 Security Avenue, Suite 500<br />
                        Cybertown, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">Phone</h3>
                      <p className="text-gray-700">(800) 555-1234</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary text-white p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-primary">Email</h3>
                      <p className="text-gray-700">info@safenetsecurity.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-heading text-xl font-bold text-primary mb-4">Service Areas</h3>
                  <p className="text-gray-700 mb-4">
                    We provide cybersecurity services nationwide with specialized on-site consulting available in:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="bg-neutral px-3 py-1 rounded text-gray-700">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.4355457752!2d-118.69192047471671!3d34.02073049448939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1614028648653!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
          title="SafeNet Security Office Location"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
