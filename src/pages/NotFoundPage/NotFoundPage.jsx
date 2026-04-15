import React from "react";
import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 className="text-7xl text-emerald-950 font-extrabold">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 hover:text-blue-700">
        Go back home
      </Link>
      <Link to="/timeline" className="text-blue-500 hover:text-blue-700">
        Go back timeline
      </Link>
    </div>
  );
}

export default NotFoundPage;