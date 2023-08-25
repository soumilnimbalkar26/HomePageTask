import React from "react";
import Icon from "../images/logo12.jpg";
import "./Slide3.css";

const Slide3 = () => {
  return (
    <>
      <section className="py-1">
        <div className="">
          <div className="container d-flex ">
            <div className="">
              <h1 className="h1size">
                Say Hello To Always-On{" "}
                <span className="text-primary">Marketing!</span>
              </h1>
              <div className="py-4">
              <i className="slide3fontsize">
                Because Customers Shop When They Want To. Not When You Want Them
                To.
              </i>
              </div>
              <div className="Lose">
              <p>
                Stop-Start Marketing Campaigns Lose You Customers Buying Right
                Now.
              </p>
              </div>
              <div className="d-flex pt-4">
                <p className="Lose border-end pe-2">
                  Run a perpetual marketing campaign
                </p>
                <p className="Lose border-end px-4">
                  Reach customers when they're most likely to buy from you.
                </p>
                <p className="Lose border-end px-4">
                  Lock your competition out.
                </p>
              </div>
            </div>
            <div>
              <img className="img-fluid" src={Icon} alt="icon" />
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

export default Slide3;