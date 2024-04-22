import React from "react";
import "./index.css";

import hamburgerIcon from "../../../assets/hamburger-icon.png";

function Navbar() {
  return (
    <>
      {/** navbar small and medium devices */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-container d-lg-none">
        <button
          className="navbar-toggler  ml-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </span>
        </button>
        <div
          className="collapse navbar-collapse p-2 bg-white navbar-items"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">
              ALL CATEGORIES
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              BESTSELLER BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              FICTION BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              TRADING BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              SELF - HELP
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              ALL BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              {/** login icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle mr-2"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              Login
            </a>
          </div>
        </div>
      </nav>

      {/** navbar large devices */}
      <nav className="navbar navbar-expand-lg navbar-light navbar-container-lg d-none d-lg-block">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse navbar-items"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav gap-3 p-1">
            <a className="nav-item nav-link text-white" href="#">
              ALL CATEGORIES
            </a>
            <hr />
            <a className="nav-item nav-link text-white" href="#">
              BESTSELLER BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link text-white" href="#">
              FICTION BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link text-white" href="#">
              TRADING BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link text-white" href="#">
              SELF - HELP
            </a>
            <hr />
            <a className="nav-item nav-link text-white" href="#">
              ALL BOOKS
            </a>
            <hr />
            <a className="nav-item nav-link" href="#">
              {/** login icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle mr-2 person-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
              <span className="text-white">Login</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
