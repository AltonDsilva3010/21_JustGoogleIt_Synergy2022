import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { logoutUser } from "../store/userSlice";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.loading);
  let userRole;
  let user = useSelector((state) => state.user.user);
  if (user) {
    userRole = user.role;
  }

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const guestLinks = (
    <Nav className="navlinks ms-auto">
      <Link className="linksnav" to="/login">
        Login
      </Link>
      <Link className="linksnav" to="/signup">
        SignUp
      </Link>
    </Nav>
  );

  const adminLinks = (
    <Nav className="navlinks ms-auto">
      <Link className="linksnav" to="/adminpage">
        AdminPage
      </Link>
      <Link className="linksnav" to="/profile">
        User Profile
      </Link>

      <button className="linksnav" onClick={handleLogout}>
        Logout
      </button>
    </Nav>
  );

  const userLinks = (
    <Nav className="navlinks ms-auto">
      <Link className="linksnav" to="/profile">
        User Profile
      </Link>
      <button className="linksnav" onClick={handleLogout}>
        Logout
      </button>
    </Nav>
  );

  const organizerLinks = (
    <Nav className="navlinks ms-auto">
      <Link className="linksnav" to="/profile">
        User Profile
      </Link>
      <Link className="linksnav" to="/addevent">
        Add an Event
      </Link>

      <button className="linksnav" onClick={handleLogout}>
        Logout
      </button>
    </Nav>
  );

  return (
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link className="logo" to="/">
              CRESCENDO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {!isLoading && (
              <>
                {isAuthenticated
                  ? userRole == "student"
                    ? userLinks
                    : userRole == "organizer"
                    ? organizerLinks
                    : adminLinks
                  : guestLinks}
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
