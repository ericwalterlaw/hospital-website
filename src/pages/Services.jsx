import { Search, Phone, Mail, MapPin, Heart, Brain, Bone, Eye, Baby, Stethoscope, Calendar, User, Home, Building, Users, Contact } from 'lucide-react';

  const services = [
    {
      name: "Cardiology",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description: "Comprehensive heart care and cardiovascular treatments"
    },
    {
      name: "Neurology",
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      description: "Expert neurological care and brain disorder treatments"
    },
    {
      name: "Orthopedics",
      icon: <Bone className="w-8 h-8 text-blue-500" />,
      description: "Bone, joint, and musculoskeletal system treatments"
    },
    {
      name: "Ophthalmology",
      icon: <Eye className="w-8 h-8 text-green-500" />,
      description: "Complete eye care and vision correction services"
    },
    {
      name: "Pediatrics",
      icon: <Baby className="w-8 h-8 text-pink-500" />,
      description: "Specialized medical care for infants and children"
    },
    {
      name: "Internal Medicine",
      icon: <Stethoscope className="w-8 h-8 text-teal-500" />,
      description: "Comprehensive primary care for adults"
    }
  ];

const Services = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            We offer comprehensive medical services across multiple specializations, 
            ensuring expert care for all your healthcare needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold ml-3">{service.name}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600">24/7 Emergency Room</h3>
              <p className="text-gray-600 mb-4">
                Our emergency department is fully equipped to handle all types of medical emergencies 
                with experienced emergency physicians and nurses available around the clock.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-red-600">Trauma Center</h3>
              <p className="text-gray-600 mb-4">
                Level II trauma center with specialized teams for critical care, surgery, 
                and life-saving interventions for severe injuries and medical conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default Services