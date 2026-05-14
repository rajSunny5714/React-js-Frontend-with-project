import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2
            className="text-3xl font-bold text-blue-600">
                404</h2>
        <p
           className="text-gray-700 mt-4 text-lg" 
            >Oops! The page you're looking for doesn't exist.</p>
    </div>
);
}

export default NotFound;
