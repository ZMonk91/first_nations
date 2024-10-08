import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircle, 
  faSquare, 
  faMobileScreen, 
  faVectorSquare, 
  faShapes, 
  faCog 
} from '@fortawesome/free-solid-svg-icons';

export default function Services() {
  const services = [
    {
      icon: <FontAwesomeIcon icon={faCircle} className="w-12 h-12 mb-4" />,
      title: "Brand Identity",
      description: "We create unique and powerful brand identities that help companies achieve their goals and stand out amongst the competition."
    },
    {
      icon: <FontAwesomeIcon icon={faSquare} className="w-12 h-12 mb-4" />,
      title: "Web Design",
      description: "We help companies craft captivating websites. Our designs tell stories and guide users, from vision to action."
    },
    {
      icon: <FontAwesomeIcon icon={faMobileScreen} className="w-12 h-12 mb-4" />,
      title: "Mobile Design",
      description: "We design mobile and responsive web experiences, allowing users to interact with apps in a way that feels effortless."
    },
    {
      icon: <FontAwesomeIcon icon={faVectorSquare} className="w-12 h-12 mb-4" />,
      title: "Illustration",
      description: "We create visual stories that help explain your mission and vision."
    },
    {
      icon: <FontAwesomeIcon icon={faShapes} className="w-12 h-12 mb-4" />,
      title: "Iconography",
      description: "Icons that support the brand and help simplify your message."
    },
    {
      icon: <FontAwesomeIcon icon={faCog} className="w-12 h-12 mb-4" />,
      title: "Development",
      description: "Solve any design challenge in Webflow. If you can dream it, we can build it."
    }
  ];

  return (
    <section className="bg-primary py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-primary-content">
          Services We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary-content p-6 rounded-lg shadow-xl card card-compact max-w-48">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}    
    