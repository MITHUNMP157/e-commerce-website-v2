import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ itemCount }) => {
  return (
    <div className="bg-secondary">
      <nav className="navbar navbar-dark  px-3">
        <Link className="navbar-brand fw-bold fs-large">East Cart</Link>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light   fw-bold">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link text-light fw-bold">
              Products
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/cart"
              className="nav-link text-light fw-bold position-relative"
            >
              Cart
              <span className="badge rounded-pill ms-1 text-bg-warning text-dark position-absolute top-0 start-51">
                {itemCount}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
