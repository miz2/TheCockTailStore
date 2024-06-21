import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
export default function Error() {
  return (
    <>
    <Navbar />
    <section className="error-page section">
      <div className="error-container nothing">
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
    </>
  );
}
