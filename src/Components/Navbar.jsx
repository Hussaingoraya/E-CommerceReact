import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./home.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            WareZone
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/category">
                  Products
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2x"
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
