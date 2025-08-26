import { Search, Phone, Mail, MapPin, Heart, Brain, Bone, Eye, Baby, Stethoscope, Calendar, User, Home, Building, Users, Contact } from 'lucide-react';


const doctors = [
    {
      name: "Dr. Amanda Rodriguez",
      specialty: "Cardiologist",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2"
    },
    {
      name: "Dr. James Chen",
      specialty: "Neurologist",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d"
    },
    {
      name: "Dr. Lisa Thompson",
      specialty: "Pediatrician",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f"
    },
    {
      name: "Dr. Michael Kumar",
      specialty: "Orthopedic Surgeon",
      experience: "20 years",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d"
    }
  ];

const AboutUs = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About MediCare Hospital</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Founded in 1985, MediCare Hospital has been serving the community for over 35 years 
            with dedication, excellence, and compassionate care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To provide exceptional healthcare services with compassion, respect, and integrity. 
              We are committed to improving the health and well-being of our community through 
              innovative medical care, education, and research.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Values</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Heart className="w-5 h-5 text-red-500 mr-3" />
                <span>Compassionate Care</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 text-blue-500 mr-3" />
                <span>Patient-Centered Approach</span>
              </div>
              <div className="flex items-center">
                <Stethoscope className="w-5 h-5 text-green-500 mr-3" />
                <span>Medical Excellence</span>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop" 
              alt="Hospital Building" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Doctors</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full object-contain"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{doctor.specialty}</p>
                  <p className="text-gray-500 text-sm">{doctor.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  export default AboutUs