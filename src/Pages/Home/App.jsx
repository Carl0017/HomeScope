import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import { ArrowBigRight, ArrowRight, Building, ChartCandlestick, X } from "lucide-react";

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

function WeCard(props) {
  return (
    <>
      <div className="weDoCard">
        <span>{props.icon}</span>
        <h2>{props.title}</h2>
        <p>{props.info}</p>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <HeadTag />
      <div className="pageWrapper">
        <Navbar />

        <div className="mainCon">
          <h2>Discover Your Dream Property With HomeScope</h2>
          <p>
            This exclusive residential complex offers 13 living units with
            carefully designed and optimally tailored floor plans.
          </p>

          <div className="buttonWrapper">
            <button className="filled">
              Browse Properties
              <span>
                <ArrowRight />
              </span>
            </button>

            <button className="outline">
              Learn More
              <span>
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="ratings">
          <div className="rateCard">
            <div id="head">5+</div>
            <span>Years In The Business</span>
          </div>
          <div className="rateCard">
            <div id="head">9k+</div>
            <span>Premium Properties</span>
          </div>

          <div className="rateCard active">
            <div id="head">5k+</div>
            <span>Happy Customers</span>
          </div>

          <div className="rateCard">
            <div id="head">58+</div>
            <span>Awards Won</span>
          </div>
        </div>

        <div className="whatWeDo">
          <h2>What we do ?</h2>
          <p>
            We are a real estate firm with over 5+ years of expertise, and our
            main goal is to provide amazing locations to our partners and
            clients. Within the luxury real estate market, our agency offers
            customized solutions.
          </p>

          <div className="weDoCardWrapper">
            
            <WeCard
              icon={<ChartCandlestick />}
              title="Property Valuation"
              info=" All-inclusive real estate services to facilitate the easy and
                confident purchase, sale, and management of your properties."
            />

            <WeCard
              icon={<Building />}
              title="Property Managment"
              info=" All-inclusive real estate services to facilitate the easy and
                confident purchase, sale, and management of your properties."
            />

            <WeCard
              icon={<ChartCandlestick />}
              title="Invest Opportunities"
              info="All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties."
            />


          </div>
        </div>
      </div>
    </>
  );
}

export default App;
