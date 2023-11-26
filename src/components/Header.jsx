import React from "react";
import FwiggyLogo from "../../assets/Fwiggy.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "../App.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="left">
          <Link
            to={"/"}
            className="linkHome"
          >
            <img src={FwiggyLogo} alt="logo" />
          </Link>
        </div>
        <div className="right">
          <ul>
            <li>
              <Link className="parent-search" to="/search">
                <FaSearch className="fa-nav-icon" />
                Search
              </Link>
            </li>
            <li>
              <Link className="c-link" to={'/Offers'}>
                <BiSolidOffer className="fa-nav-icon" />
                Offer
              </Link>
            </li>
            <li>
              <Link className="c-link">
                <IoHelpBuoyOutline className="fa-nav-icon" />
                Help
              </Link>
            </li>
            <li>
              <Link className="c-link">
                <CgProfile className="fa-nav-icon" />
                Sign In
              </Link>
            </li>
            <li>
              <Link className="c-link" to={'/Cart'}>
                <FiShoppingCart className="fa-nav-icon" />
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
