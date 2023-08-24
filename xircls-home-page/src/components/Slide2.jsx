import React from "react";
import Icon from "../images/logo12.jpg";
import "./Slide2.css";

const Slide2 = () => {
  return (
    <>
      <section className="section1 container">
        <div className="outerdiv">
          <div className="headinglogo">
            <h1 className="heading2">
              Your Customers Stay Yours And Yours Alone
            </h1>
            <img className="imgbox ms-auto" src={Icon} alt="icon" />
          </div>

          <div>
            <p>
              <i>Explore a world beyond Aggregators!</i>
            </p>
          </div>

          <div className="flexboxes">
            <div className="flexcontainer">
              <p className="border-end py-1">Stop driving customers to your competition</p>
              <p className="border-end py-1">Create sustainable options to harmful discounting.</p>
              <p className="border-end py-1">Cultivate loyalty for your business, not third-party platforms.</p>
            </div>
          </div>

          {/* <section className=''>
          <div>
            <div>
              <h2 className='fs-1'>Your Customers Stay Yours And Yours Alone</h2>
            </div>

            <div>
              <p><i>Explore a world beyond Aggregators!</i></p>
            </div> */}
        </div>
      </section>
    </>
  );
};

export default Slide2;
