import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Submenu from "../Submenu/Submenu";

const Footer = () => {
  const isLoggedIn = sessionStorage.getItem("token");

  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-list--item footer-hover">
            <Link className="footer-link footer-hover" to={"/"}>
              Home
            </Link>
          </li>
          <li className="footer__nav-list--item footer-hover">About</li>
          <li className="footer__nav-list--item footer-hover">
            <span>Category</span>
            <Submenu />
          </li>
          <li className="footer__nav-list--item footer-hover">
            {!isLoggedIn ? (
              <Link className="footer-hover" to={"/login"}>
                Login
              </Link>
            ) : (
              <Link className="footer-hover" to={"/profile"}>
                Profile
              </Link>
            )}
          </li>
          <li className="footer__nav-list--item footer-hover">
            {isLoggedIn && (
              <Link className="footer-hover" to={"/logout"}>
                Logout
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Link to={"/"}>
        <h1 className="footer__title">Donation Hub</h1>
      </Link>

      {/* <p className="footer__author">By Carol DeWeger</p> */}
    </div>
  );
};

export default Footer;
