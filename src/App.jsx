import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import HomePage from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import FindPatients from './pages/FindPatients';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className='pt-6'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/find-patients" element={<FindPatients />} />
        </Routes>
      </main>
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NewLife Medicals. All rights reserved.
      </footer>
    </div>
  );
}
