import React from 'react'
import Icon from "../images/logo12.jpg";

const Slide3 = () => {
  return (
    <>
        <section className="section1">
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
              <h5>Instant Marketing Colaboration</h5>
              <h5>Ledger based verification</h5>
              <h5>Real-Time Customer Reach</h5>
              <h5>Instant Customer Gratification</h5>
              <h5>No Data Sharing</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slide3