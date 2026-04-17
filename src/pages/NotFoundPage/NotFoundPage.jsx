import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-50 flex items-center justify-center ">
      <div className="text-center bg-white  w-full ">
        
        <h1 className="text-9xl font-extrabold text-emerald-900 mb-4">
          404
        </h1>

        <h2 className="text-4xl font-semibold text-emerald-800 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="bg-emerald-700 text-white px-5 py-2 rounded-lg hover:bg-emerald-600 transition"
          >
            Home
          </Link>

          <Link
            to="/timeline"
            className="border border-emerald-500 text-emerald-600 px-5 py-2 rounded-lg hover:bg-emerald-50 transition"
          >
            Timeline
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;