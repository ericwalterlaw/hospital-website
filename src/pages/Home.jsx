import { Link } from "react-router-dom";
import { Heart, Stethoscope, Calendar, Users, Building } from "lucide-react";

const HomePage = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 py-28 text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to MediCare Hospital
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Providing exceptional healthcare services with compassion, expertise,
            and cutting-edge technology. Your health and well-being are our top
            priorities.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/services"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose MediCare?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine advanced medical technology with personalized care to
            ensure the best outcomes for our patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert Care</h3>
            <p className="text-gray-600">
              Our experienced medical professionals provide world-class healthcare
              services.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
            <p className="text-gray-600">
              State-of-the-art medical equipment and innovative treatment methods.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
            <p className="text-gray-600">
              Emergency services and patient care available around the clock.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Stats Section */}
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold">25+</h3>
          <p className="mt-2">Years of Service</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">100+</h3>
          <p className="mt-2">Qualified Doctors</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">5000+</h3>
          <p className="mt-2">Happy Patients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold">15+</h3>
          <p className="mt-2">Departments</p>
        </div>
      </div>
    </div>



    {/* Call-to-Action Section */}
    <div className="bg-blue-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Prioritize Your Health?</h2>
        <p className="text-lg mb-8">
          Schedule an appointment with our experts and take the first step
          towards better health.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
