import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  useEffect(() => { // Added a function to facilitate users to scroll to top after clicking on links
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-green-600 text-white py-10 px-5 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* About Us Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">About Us</h1>
          <p className="text-sm text-white">
            We are dedicated to providing healthcare and education for all,
            empowering communities to build a sustainable and healthy future.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/About" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/Gallery" className="hover:text-gray-300">Gallery</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
          <p className="text-sm text-white">
            Gurugram, Haryana - 122503, India
          </p>
          <p className="text-sm text-white">
            Email: info@admedusociety.org
          </p>
          <p className="text-sm text-white">
            Phone: +91-9958586721
          </p>
        </div>

        {/* Newsletter Section */}
        <div>
          <h1 className="text-2xl font-semibold mb-4">Newsletter</h1>
          <p className="text-sm text-white mb-4">
            Subscribe to get updates about our latest activities.
          </p>
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-md text-gray-700"
            />
            <button
              type="submit"
              className="bg-white text-green-600 p-2 rounded-md hover:bg-gray-100"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white mt-10">
        <p className="text-center text-sm py-4">
          © 2024 All Rights Reserved : Renu Sharma Healthcare & Education Foundation
        </p>
      </div>
    </div>
  );
};

export default Footer;
