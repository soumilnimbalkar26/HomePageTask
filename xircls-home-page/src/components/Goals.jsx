import React from "react";
import './Goals.css'

const Goals = () => {
  return (
    <>
      <div className="sectiongoals py-4 my-5">
        <div className="text-white">
          <div className="container d-block justify-content-center">
            <h2 className="d-flex justify-content-center display-5">
              Partner with other businesses
            </h2>
            <h5 className="d-flex justify-content-center pb-3">
              Across Sectors, Online or Offline, Anywhere in the World.
              Instantly.
            </h5>

            <h2 className="d-flex justify-content-center display-5">
              Market Directly to their Customers
            </h2>
            <h5 className="d-flex justify-content-center pb-3">
              At the Moment of Transaction. Without Customer Data being shared.
            </h5>

            <h2 className="d-flex justify-content-center display-5">
              Retain Existing Customers
            </h2>
            <h5 className="d-flex justify-content-center pb-3">
              At Zero Cost, via Partner Rewards.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goals;
