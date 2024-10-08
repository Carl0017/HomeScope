import React, { useState } from "react";
import "./App.scss";
import { Link } from "react-router-dom";
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

//quotes images
import image1 from "../../assets/2-1.png";
import image2 from "../../assets/2-2.png";
import image3 from "../../assets/2-3.png";
import image4 from "../../assets/2-4.png";
import image5 from "../../assets/2-5.png";
import image6 from "../../assets/2-6.png";
import Icon from "../../assets/about.png";

function HeadTag({ closeHead }) {
  return (
    <>
      <div className="headTag">
        <div id="black"></div>
        <h4>
          ⭐ discover your dream property with homeScope.{" "}
          <Link to="/">learn more</Link>
        </h4>

        <div className="closeBtn" onClick={closeHead}>
          <X />
        </div>
      </div>
    </>
  );
}

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

function ReviewCard(props) {
  return (
    <>
      <div className="reviewCard">
        <div className="cardHead">{props.Id}</div>
        <div className="cardBody">
          <span className="starWrapper">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
          <h3>{props.Testimonial}</h3>
        </div>
        <div className="divider"></div>

        <div className="cardBottom">
          <img src={props.Icon} alt="" />
          <span>
            <h1>{props.Name}</h1>
            <p> {props.Role}</p>
          </span>
        </div>
      </div>
    </>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  const closeHead = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && <HeadTag closeHead={closeHead} />}

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
              Title="Auckland Apartment"
              Info="voluptatem accusantium dolorem"
              doorNumber="2"
              rooms="2"
              showers="1"
              location="Tema"
              priceTag="798.00"
            />

            <AvailableCard
              BackgroundImage={image4}
              Title="Vally View Apartment"
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

      <div className="testimonials">
        <h4>TESTIMONIAL</h4>
        <h1>What Our Happy Clients Says</h1>

        <div className="testimonialCardWrapper">
          <ReviewCard
            Id="01"
            Testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat
            delectus perspiciatis sed harum veritatis quo."
            Icon={Icon}
            Name="Carl Stanley"
            Role="CTO Universal"
          />
          <ReviewCard
            Id="02"
            Testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat
            delectus perspiciatis sed harum veritatis quo."
            Icon={Icon}
            Name="Emmanuel"
            Role="Ceo Universal"
          />
          <ReviewCard
            Id="03"
            Testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat
            delectus perspiciatis sed harum veritatis quo."
            Icon={Icon}
            Name="Ida Quartey"
            Role="Systems Admin"
          />
          <ReviewCard
            Id="04"
            Testimonial="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In fugiat
            delectus perspiciatis sed harum veritatis quo."
            Icon={Icon}
            Name="John Doe"
            Role="Chief Security"
          />
        </div>

        <button>View More</button>
      </div>
    </>
  );
}

export default App;
