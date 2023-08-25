import React from "react";
import Icon from "../images/logo12.jpg";
import "./Slide2.css";

const Slide2 = () => {
  return (
    <>
      <section className="py-1">
        <div className="">
          <div className="container d-flex ">
            <div className="">
              <h1 className="h1size">
                Your <span className="text-primary">Customers Stay Yours</span>
              </h1>
              <h1 className="h1size">
                <span className="text-primary">And Yours Alone</span>
              </h1>

              <div className="py-3">
                <i className="ifontsize">Explore a world beyond Aggregators!</i>
              </div>

              <div className="d-flex pt-4 pb-5">
                <p className="pfontsize border-end py-1">
                  Stop driving customers to your competition
                </p>
                <p className="pfontsize border-end py-1 ps-4">
                  Create sustainable options to harmful discounting.
                </p>
                <p className="pfontsize py-1 ps-4">
                  Cultivate loyalty for your business, not third-party
                  platforms.
                </p>
              </div>
            </div>
            <div>
              <img className="img-fluid imgsizeslides" src={Icon} alt="icon" />
            </div>
          </div>

          <div>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slide2;
