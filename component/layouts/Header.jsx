import React from 'react';
import { Link } from 'react-router-dom';
import { FcReading } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">

          <a className="navbar-brand bg-dark text-white p-2 border rounded-2" href="#">
           <FcReading/> ReadHub
          </a>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* Navigation Links */}
              <li className="d-flex flex-row gap-3 mt-3">
                <Link to="/" className="text-decoration-none text-black"><FaHome/> Home</Link>
                <Link to="/signup" className="text-decoration-none text-black"><FaFileSignature/> Sign Up</Link>
                <Link to="/login" className="text-decoration-none text-black"><FaSignInAlt/> Log In</Link>
              </li>

            </ul>

           

          </div>
        </div>
      </nav>
    </>
  );
};
