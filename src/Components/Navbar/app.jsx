import React, {useState} from 'react'
import {Link } from "react-router-dom"
import {
    AlignRight,
    ArrowBigRight,
    ArrowRight,
    Bath,
    BedSingle,
    Building,
    ChartCandlestick,
    DoorOpen,
    Ellipsis,
    MapPin,
    Star,
    X,
  } from "lucide-react";

import "./app.scss";


function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
    return (
      <>
        <>
          <div className="navWrapper">
            <div className="logo">HomeScope</div>
            <nav>
              <div className={`nav-elements ${showNavbar && "active"}`}>
                <ul>
                  <li>
                    <Link
                      to="/"
                      style={{ color: "#222831", textDecoration: "none" }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ color: "#222831", textDecoration: "none" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ color: "#222831", textDecoration: "none" }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      style={{ color: "#222831", textDecoration: "none" }}
                    >
                      Properties
                    </Link>
                  </li>
                  <button className="navbrandBtn">
                    <Link
                      to="/Login"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      Contact Us
                    </Link>
                    <span>
                      <ArrowRight />
                    </span>
                  </button>
                </ul>
              </div>
            </nav>
            <button className="brandBtn">
              <Link to="/Login" style={{ color: "#fff", textDecoration: "none" }}>
                Contact Us
              </Link>
              <span>
                <ArrowRight />
              </span>
            </button>
            <div id="menu-icon" onClick={handleShowNavbar}>
              <AlignRight />
            </div>
          </div>
        </>
      </>
    );
  }

export default Navbar