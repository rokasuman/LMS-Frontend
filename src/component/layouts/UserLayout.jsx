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

      <Container fluid>
        <Row>
          <Col md={3} xl={2} className="bg-dark text-white min-vh-100 p-3">
            <div>
              <div>Welcome back</div>
              <p>Suman Roka</p>
            </div>
            <hr />
            <Sidebar />
          </Col>

          <Col md={9} xl={10} className="p-4">
            <main className="main">
              <Outlet />
            </main>
          </Col>
        </Row>
      </Container>

      <Footer />
    </AuthRoute>
  );
};

export default UserLayout;
