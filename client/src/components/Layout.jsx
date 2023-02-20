import React from "react";
import AppNavbar from "./Navbar";
import PropTypes from "prop-types";

const Layout = ({ children, hasNav, hasFooter }) => {
  return (
    <>
      {hasNav && <AppNavbar />}

      <main>{children}</main>

      {hasFooter && (
        <footer className="text-center">Remote React Job Board Created by ME!</footer>
      )}
    </>
  );
};

Layout.propTypes = {
  hasNav: PropTypes.bool.isRequired,
  hasFooter: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
