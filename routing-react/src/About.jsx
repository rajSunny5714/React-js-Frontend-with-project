import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold text-blue-600">About Us</h2>
      <p className="text-gray-700 mt-4 text-lg max-w-2xl text-center">
        Learn more about our mission, vision, and the team that makes it happen.
      </p>

      <nav className="mt-6">
        <ul className="flex space-x-4">
          <li><Link to="team" className="text-blue-500 hover:underline">Our Team</Link></li>
          <li><Link to="/" className="text-blue-500 hover:underline">Back to Home</Link></li>
        </ul>
      </nav>

      {/* Outlet for nested routes */}
      <div className="mt-8 w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
}

export default About;
