import React from "react";
import Icon from "../images/logo12.jpg";
// import NextIcon from '../images/carouselleft.png'
// import PrevIcon from '../images/carouselright.png'
import "./Slide1.css";

const Slide1 = () => {
  return (
    <>
      <section className="section1 container">
        <div className="outerdiv">
          <div className="headinglogo">
            <h1 className="heading2">
              The<span className="text-primary">Worlds First Decentralized, Collaborative</span>Marketing
              Network
            </h1>
            <img className="imgbox ms-auto" src={Icon} alt="icon" />
          </div>

          <div>
            <h3 className="text3">
              <i>Building the Web3 of Marketing</i>
            </h3>
          </div>

          <div className="rowtext">
            <div>
              <h1 className="percent">100%</h1>
              <h6 className="percentstats">Verified Cstomer Engagement</h6>
            </div>

            <div>
              <h1 className="percent">3%</h1>
              <h6 className="percentstats">Average Click Through</h6>
            </div>

            <div>
              <h1 className="percent">13%</h1>
              <h6 className="percentstats">Conversion Rate</h6>
            </div>
          </div>

          <div className="flexboxes">
            <div className="flexcontainer">
              <p className="border-end py-1">Instant Marketing Colaboration</p>
              <p className="border-end py-1">Ledger based verification</p>
              <p className="border-end py-1">Real-Time Customer Reach</p>
              <p className="border-end py-1">Instant Customer Gratification</p>
              <p>No Data Sharing</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-5">
        <div className="">
          <div className="container d-flex align-items-start">
            <div className="row">
              <div className="">
                <h1 className="display-3">
                  <b>The</b>
                  <b>
                    <span className="custom-color">
                      Worlds First Decentralized, Collaborative
                    </span>
                  </b>
                  <b>Marketing Network</b>
                </h1>
                <div>
                  <img className="ms-auto" src={Icon} alt="icon" />
                </div>
                <div className="py-3">
                  <h3 className="">
                    <i>Building the Web3 of Marketing</i>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="py-3">
            <h3 className="">
              <i>Building the Web3 of Marketing</i>
            </h3>
          </div>

          <div className="">
            <div className="d-flex">
              <div className="col">
                <h1 className="">100%</h1>
                <h6 className="">Verified Customer Engagement</h6>
              </div>

              <div className="col">
                <h1 className="">3%</h1>
                <h6 className="">Average Click Through</h6>
              </div>

              <div className="col">
                <h1 className="">13%</h1>
                <h6 className="">Conversion Rate</h6>
              </div>
            </div>

            <div className=" d-flex">
              <div className="col border-end">
                <h5>Instant Marketing Collaboration</h5>
              </div>

              <div className="col border-end">
                <h5>Ledger based verification</h5>
              </div>

              <div className="col border-end">
                <h5>Real-Time Customer Reach</h5>
              </div>

              <div className="col border-end">
                <h5>Instant Customer Gratification</h5>
              </div>
              <div className="col">
                <h5>No Data Sharing</h5>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Slide1;
