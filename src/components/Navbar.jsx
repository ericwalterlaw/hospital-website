import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-lg hover:bg-gray-100 ${
          isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
          🏥 New Life Care
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/about">About Us</NavItem>
          <NavItem to="/contact">Contact Us</NavItem>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // Close icon (X)
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="h-6 w-6 text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t shadow-sm px-4 py-3 space-y-2">
          <NavItem to="/" onClick={closeMenu}>Home</NavItem>
          <NavItem to="/services" onClick={closeMenu}>Services</NavItem>
          <NavItem to="/about" onClick={closeMenu}>About Us</NavItem>
          <NavItem to="/contact" onClick={closeMenu}>Contact Us</NavItem>
          <NavItem to="/find-patients" onClick={closeMenu}>Find Patients</NavItem>
        </nav>
      )}
    </header>
  );
}
