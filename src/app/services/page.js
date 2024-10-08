import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faShield, faTools, faUserSecret, faPiggyBank, faLightbulb } from '@fortawesome/free-solid-svg-icons';


export default function Services() {
  const services = [
    {
      icon: faTruck,
      title: "Logistics",
      description: "Comprehensive nationwide logistics covering all 50 states. We focus on efficiency, reliability, and seamless coordination for all your shipping needs."
    },
    {
      icon: faShield,
      title: "Security",
      description: "Top-tier security services from personal details to high-level asset protection. We ensure the safety and confidentiality of individuals and property."
    },
    {
      icon: faTools,
      title: "Development",
      description: "Full-spectrum project support from concept to completion. We offer tailored design, engineering, and manufacturing solutions to meet your specific needs."
    },
    {
      icon: faUserSecret,
      title: "Discretion",
      description: "Specialized in covert operations, including investigative and surveillance services. We ensure your objectives are achieved with utmost confidentiality."
    },
    {
      icon: faPiggyBank,
      title: "Cost Efficiency",
      description: "High-quality services within budget constraints. We deliver superior results without the excessive costs typically associated with our competitors."
    },
    {
      icon: faLightbulb,
      title: "Consulting",
      description: "Expert guidance in government contracting and regulatory compliance. We offer strategic consulting to guide your operations to success while minimizing risks."
    }
  ];

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="card-body items-center text-center">
                <FontAwesomeIcon icon={service.icon} className="lg:text-sm md:text-lg sm:text-sm max-w-20 text-primary mb-4" />
                <h2 className="card-title text-xl mb-2">{service.title}</h2>
                <p className="text-base-content text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="mb-8">Contact us today to learn more about how we can help your business succeed.</p>
          <a href="/contact" className="btn btn-primary btn-lg">
            Explore Our Services
          </a>
        </div>
      </div>
    </div>
  );
}