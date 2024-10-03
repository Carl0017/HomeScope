import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";
import {
  ArrowBigRight,
  ArrowRight,
  Bath,
  BedSingle,
  Building,
  ChartCandlestick,
  DoorOpen,
  Ellipsis,
  MapPin,
  X,
} from "lucide-react";

//quotes images
import image1 from "../../assets/2-1.png";
import image2 from "../../assets/2-2.png";
import image3 from "../../assets/2-3.png";
import image4 from "../../assets/2-4.png";
import image5 from "../../assets/2-5.png";
import image6 from "../../assets/2-6.png";

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

function QuotesCard(props) {
  return (
    <>
      <div
        className="cardHolder"
        style={{ backgroundImage: `url(${props.background})` }}
      ></div>
    </>
  );
}

function AvailableCard(props) {
  return (
    <>
      <div className="availableCard">
        <div
          className="bgWrapper"
          style={{ backgroundImage: `url(${props.BackgroundImage})` }}
        />
        <div className="cardHead">
          <h2>{props.Title}</h2>
          <p>{props.Info}</p>
        </div>

        <div className="extraInfo">
          <span>
            <DoorOpen />
            <p>{props.doorNumber} Room(s)</p>
          </span>

          <span>
            <BedSingle />
            <p>{props.rooms} Bedroom(s)</p>
          </span>

          <span>
            <Bath />
            <p>{props.showers} Shower(s)</p>
          </span>

          <span>
            <MapPin />
            <p>{props.location}</p>
          </span>
        </div>

        <div className="bottomCon">
          <h3>Ghc {props.priceTag}</h3>
          <button>Details</button>
        </div>
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
        <div className="overlay"></div>
         <div className="mainWrapper">
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
            With over 5 years of experience, we deliver prime locations and
            customized solutions in the luxury real estate market.
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

            <WeCard
              icon={<Ellipsis />}
              title="And Many More"
              info="All-inclusive real estate services to facilitate the easy and confident purchase, sale, and management of your properties."
            />
          </div>
        </div>

        <div className="availableProperties">
          <h2>Best Available Properties</h2>
          <p>
            We are a real estate firm with over 5 years of expertise, and our
            main goal is to provide amazing locations to our partners and
            clients
          </p>

          <div className="availableWrapper">
            <AvailableCard
              BackgroundImage={image1}
              Title="Alpina House"
              Info="voluptatem accusantium dolorem"
              doorNumber="4"
              rooms="4"
              showers="4"
              location="McCarthy"
              priceTag="1,960"
            />

            <AvailableCard
              BackgroundImage={image2}
              Title="Villa Archetype"
              Info="voluptatem accusantium dolorem"
              doorNumber="3"
              rooms="3"
              showers="2"
              location="East Legon"
              priceTag="1,360"
            />

            <AvailableCard
              BackgroundImage={image3}
              Title="Apartments Auckland"
              Info="voluptatem accusantium dolorem"
              doorNumber="2"
              rooms="2"
              showers="1"
              location="Tema"
              priceTag="798.00"
            />

            <AvailableCard
              BackgroundImage={image4}
              Title="Apartments Auckland"
              Info="voluptatem accusantium dolorem"
              doorNumber="1"
              rooms="1"
              showers="1"
              location="Madina"
              priceTag="499.22"
            />
          </div>
        </div>
      </div>

      <div className="requestQuote">

          <div className="mobileTitle">
            <h2>Get In Touch Today To Get A Free Project Quote</h2>
            <button>Get In Touch</button>
          </div>

        <div className="imageGalleryOne">
          <div className="galleryCard">
            <QuotesCard background={image1} />
            <QuotesCard background={image2} />
            <QuotesCard background={image3} />
          </div>
          <div className="quotes">
            <h2>Get In Touch Today To Get A Free Project Quote</h2>
            <button>Get In Touch</button>
          </div>
          <div className="galleryCard">
            <QuotesCard background={image4} />
            <QuotesCard background={image5} />
            <QuotesCard background={image6} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
