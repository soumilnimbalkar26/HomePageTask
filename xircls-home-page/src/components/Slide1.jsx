// import { useState } from "react";
// import { useEffect } from "react";
import React from "react";
import Icon from "../images/logo12.jpg";
// import NextIcon from '../images/carouselleft.png'
// import PrevIcon from '../images/carouselright.png'
// import "./Slide1.css";

const Slide1 = () => {
  return (
    <>
      <section className="py-1">
        <div className="">
          <div className="container d-flex ">
            <div className="">
              <h1 className="h1size">
                The{" "}
                <span className="text-primary">
                  Worlds First Decentralized,
                </span>
              </h1>
              <h1 className="h1size">
                <span className="text-primary">Collaborative</span> Marketing
                Network
              </h1>

              <div className="py-3">
                <i className="ifontsize">Building the Web3 of Marketing</i>
              </div>

              <div className="d-flex py-3">
                <div className="pe-5">
                  <h1>100%</h1>
                  <p className="fs-5">Verified Customer Engagement</p>
                </div>

                <div className="pe-5">
                  <h1>3%</h1>
                  <p className="fs-5">Average click through</p>
                </div>

                <div className="pe-5">
                  <h1>13%</h1>
                  <p className="fs-5">Conversion rate</p>
                </div>
              </div>

              <div className="d-flex pt-4">
                <p className="pfontsize border-end pe-2">
                  Instant Marketing Collaboration
                </p>
                <p className="pfontsize border-end px-4">
                  Ledger based verification
                </p>
                <p className="pfontsize border-end px-4">
                  Real-time customer search
                </p>
                <p className="pfontsize border-end px-4">
                  Instant customer gratification
                </p>
                <p className="pfontsize ps-4">No data sharing</p>
              </div>
            </div>
            <div>
              <img className="imgsizeslide1 img-fluid" src={Icon} alt="icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slide1;
