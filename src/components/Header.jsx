import React from "react";
import FwiggyLogo from "../../assets/Fwiggy.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import '../../src/index.css'

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="left">
          <Link
            to={"/"}
            className="linkHome"
          >
            <img className="h-11" src={FwiggyLogo} alt="logo" />
          </Link>
        </div>
        <div className="right p-4">
          <ul className="flex p-1 align-middle">
            <li className="mr-6">
              <Link className="flex items-center" to="/search">
                <FaSearch className="fa-nav-icon mr-1" />
                Search
              </Link>
            </li>
            <li className="mr-6">
              <Link className="c-link flex items-center" to={'./Offers'}>
                <BiSolidOffer className="fa-nav-icon mr-1" />
                Offer
              </Link>
            </li>
            <li className="mr-6">
              <Link className="c-link flex items-center">
                <IoHelpBuoyOutline className="fa-nav-icon mr-1" />
                Help
              </Link>
            </li>
            <li className="mr-6">
              <Link className="c-link flex items-center">
                <CgProfile className="fa-nav-icon mr-1" />
                Sign In
              </Link>
            </li>
            <li className="mr-6">
              <Link className="c-link flex items-center" to={'/Cart'}>
                <FiShoppingCart className="fa-nav-icon mr-1" />
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
