import React from "react";
import Restaurant from "./Restaurant"; /*Step8*/
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TuristInfoCard />
      <Bookings />
      <Restaurant />
      <Footer
        info={[
          "123 Fake Street, London, E1 4UD ",
          " hello@fakehotel.com ",
          " 0123 456789"
        ]}
      />
    </div>
  );
};
//step 2
const Heading = () => {
  return (
    <header className="App-header">
      CYF Hotel{" "}
      <img
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        className="App-logo"
      />{" "}
    </header>
  );
};

//step 3
const TuristInfoCard = () => {
  return (
    <div className="cards">
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/92/City_of_Glasgow_at_night%2C_Scotland.jpg"
          className="card-img-top"
          alt="Glasgow"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go to Glasgow
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/77/Manchester_Sky_Crop.jpg"
          className="card-img-top"
          alt="Manchester"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go to Manchester
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg"
          className="card-img-top"
          alt="London"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go to London
          </a>
        </div>
      </div>
    </div>
  );
};

//step 4
const Footer = props => {
  return (
    <ul className="footer">
      {props.info.map(item => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default App;
