import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { ArrowBigRight, ArrowRight, X } from "lucide-react";

function HeadTag() {
  return (
    <>
      <div className="headTag">
        <div id="black"></div>
        <h4>
          ⭐ discover your dream property with homeScope.{" "}
          <Link to="/">learn more</Link>
        </h4>

        <div className="closeBtn">
          <X />
        </div>
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">HomeScope</div>
          <ul>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Properties</Link>
            </li>
            <li>
              <Link to="#">Services</Link>
            </li>
          </ul>  

          <button>
            Contact Us
            <span>
              <ArrowRight />
            </span>
          </button>
        </nav>
      </header>
    </>
  );
}

function App() {
  return (
    <>
      <HeadTag />
      <Navbar />

      <div className="mainCon">
        <h2>
          Discover Your Dream Property with HomeScope
        </h2>
        <p>
          This exclusive residential complex offers 13 living units with carefully designed and optimally tailored floor plans.
        </p>

        <div className="buttonWrapper">
          <button>
           Browse Properties
           <span>
              <ArrowRight />
            </span>
          </button>

          <button>
          Learn More
           <span>
              <ArrowRight />
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
