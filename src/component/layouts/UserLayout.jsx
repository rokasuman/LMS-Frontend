import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { AuthRoute } from "../../../pages/auth/AuthRoute";

const UserLayout = () => {
  return (
    <AuthRoute>
      <Header />

      <div className="d-flex">
     
          <div className="bg-dark text-white min-vh-100 p-3" style={{width:"200px"}}>
            <div>
              <div>Welcome back</div>
              <p>Suman Roka</p>
            </div>
            <hr /> 
            <div>
              <Sidebar />
            </div>
          
          </div>

        
            <main className="main mt-4" style={{width:"100%"}}>
              <Outlet />
            </main>
       
       
      </div>

      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;
