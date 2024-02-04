import React, { useState } from "react";
import "./Header.css";
// import logo from "../../../assets/logo.png";
import hamburgerMenuIcon from "../../assets/icons/hamburger-menu.svg";
import CloseIcon from "../../assets/icons/close.svg";
import { Link } from "react-router-dom";
// import {logOut} from "../../fblog"

const Header = () => {
  const [menuStatus, setmenuStatus] = useState(false);

  const openMenu = () => {
    setmenuStatus(!menuStatus);
    document.getElementById("");
  };
  const scrollTop = () => {
    if (window.scrollY > 10) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <header>
      <nav className={"navbarMain"}>
        <div className={"navbarMainItems"}>
          <div className={"navLogo"}>
            <Link to="/">
              <a onClick={scrollTop}>
                <p role="text">Navbar</p>
              </a>
            </Link>
          </div>
          <div
            className={`${menuStatus ? "showbackshadow" : "hidebackshadow"}`}
          ></div>
          <nav
            className={`navbarMainLinks  ${
              menuStatus ? "showsidebar" : "hidesidebar"
            }`}
          >
            <ul className="sidebar">
              <li className="closeIcon">
                <div className={"sidebarLogo"}>
                  <Link onClick={openMenu} to="/">
                    <small>Navbar</small>
                  </Link>
                </div>
                <img onClick={openMenu} src={CloseIcon} alt={"close_btn"} />
              </li>
              <li>
                <Link onClick={openMenu} to="/" className="MenuItem">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link onClick={openMenu} to="/about" className="MenuItem">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link onClick={openMenu} to="/form" className="MenuItem">
                  <a>Form</a>
                </Link>
              </li>
              <li>
                <Link onClick={openMenu} to="/test1" className="MenuItem">
                  <a>Test1</a>
                </Link>
              </li>
              <li>
                <Link onClick={openMenu} to="/test2" className="MenuItem">
                  <a>Test2</a>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className={`navbarHamburgerMenuButton ${
              menuStatus ? "hidemenuicon" : "showmenuicon"
            }`}
            onClick={openMenu}
          >
            <img src={hamburgerMenuIcon} alt="Open menu" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
