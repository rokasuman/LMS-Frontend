import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcReading } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { fetchUserAction } from "../../../feature/user/userAction";
import  { logoutUser } from "../../../feature/user/userSlice.js"
export const Header = () => {
  const { user} = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  //RESTORING IN USER Refresh 
  useEffect(()=>{
   const token = sessionStorage.getItem("accessJWT");
   if(token){
    dispatch(fetchUserAction())
   }else{
    dispatch(logoutUser())
   }
  },[dispatch])

  const handleOnLogOut = ()=>{
    const refreshToken = localStorage.getItem("refreshJWT")
    if(refreshToken){
      localStorage.removeItem("refreshJWT");
    }
    sessionStorage.removeItem("accessJWT");
    
    dispatch(logoutUser({}))
    navigate("/login")

  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand bg-dark text-white p-2 border rounded-2"
            href="#"
          >
            <FcReading /> ReadHub
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
                <Link to="/" className="text-decoration-none text-black">
                  <FaHome /> Home
                </Link>
                {user?._id ? (
                  <>
                    <Link
                      to="/user"
                      className="text-decoration-none text-black"
                    >
                      <FaFileSignature /> Dashboard
                    </Link>
                    <Link
                      to="/login"
                      className="text-decoration-none text-black"
                      onClick={handleOnLogOut}
                    >
                      < IoLogOut/> Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to="/signup"
                      className="text-decoration-none text-black"
                    >
                      <FaFileSignature /> Sign Up
                    </Link>
                    <Link
                      to="/login"
                      className="text-decoration-none text-black"
                    >
                      <FaSignInAlt /> Log In
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
