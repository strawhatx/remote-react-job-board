import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../stores/authentication";

const AppNavbar = () => {
  const navigate = useNavigate();

  const [color, setColor] = useState("light");

  const { currentUser, logout } = useAuthStore((state) => ({
    currentUser: state.currentUser,
    logout: state.logout,
  }));

  const handleSignOut = () => {
    logout().then(() => navigate("/signin"));
  };

  const handleNavColor = () => {
    let height = window.screen.width > 600 ? 80 : 64;

    if (window.scrollY >= height) {
      setColor("white");
    } else {
      setColor("light");
    }
  };

  window.addEventListener("scroll", handleNavColor);

  return (
    <div className="flex-grow-1">
      <Navbar position="fixed" expand="md" bg={color} style={{ height: 80 }}>
        <Container fluid="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">
            <h5 className="align-right me-3 mb-0">
              <span className="border border-2 rounded-circle p-1">
                <strong>RP</strong>
              </span>{" "}
              Remote React Job Board
            </h5>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="me-3" href="/">
                Home
              </Nav.Link>

              {currentUser && (
                <Nav.Link className="me-3" href="/search">
                  Search
                </Nav.Link>
              )}

              {currentUser && <Nav.Link href="/my-account">Account</Nav.Link>}
            </Nav>

            {!currentUser && (
              <Nav>
                <Nav.Link className="me-3" href="/signin">
                  Sign In
                </Nav.Link>

                <Button
                  variant="primary"
                  className="w-full px-4 py-2 tracking-wide text-white"
                  href="/signup"
                >
                  Sign up
                </Button>
              </Nav>
            )}

            {currentUser && (
              <Nav>
                <NavDropdown
                  title={currentUser.email}
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/my-account">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/my-account">
                    My Account
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleSignOut}>
                    Sign out{" "}
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
