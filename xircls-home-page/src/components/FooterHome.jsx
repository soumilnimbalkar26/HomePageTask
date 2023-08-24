import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import "./FooterHome.css";
const FooterHome = () => {
  return (
    <>
      <div className="section16">
        <div className="column1">
          <div className="column1section1">
            <div className="imgdiv">
              <img
                src="https://www.xircls.com/static/images/website-slide/logo-dark.png"
                alt=""
              />
            </div>

            <div className="column1text">
              <p>
                The World's First Decentralized Collaborative Marketing Network
              </p>
            </div>
            <div>
              <div className="hqdiv">
                <strong>HQ</strong>
                <p>
                  G-08, The Summit Business Bay by Omkar, Andheri (East), Mumbai
                  - 400093
                </p>
              </div>

              <div className="address">
                <strong>Registered Address</strong>
                <p>
                  G-08, The Summit Business Bay by Omkar, Andheri (East), Mumbai
                  - 400093
                </p>
              </div>

              <div className="ico-number">
                <img
                  className="imgsizefoot"
                  src="https://www.xircls.com/static/images/website-slide/ind.png"
                  alt=""
                />
                <p>+91 9969 333 666</p>
              </div>
              <div className="ico-number">
                <img
                  className="imgsizefoot"
                  src="https://www.xircls.com/static/images/website-slide/us.png"
                  alt=""
                />
                <p>+1 (936) 333 6363</p>
              </div>
              <div className="ico-number">
                <img
                  className="imgsizefoot"
                  src="https://www.xircls.com/static/images/website-slide/email.png"
                  alt=""
                />
                <p>info@xircls.com</p>
              </div>

              <div>
                <p>
                  XIRCLS is a registered trademark of ALTISSADVANCE TECH PVT.
                  LTD.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="column2">
          <div className="column2section2">
            <p className="products">Products</p>

            <p className="linktexts">
              <a href="">Infiniti</a>
            </p>
            <p className="linktexts">
              <a  href="">Semper Fi</a>
            </p>
            <p className="linktexts">
              <a   href="">Sniper</a>
            </p>
            <p className="careers">Careers</p>
            <p className="channel-partners">Channel-Partners</p>
            <p className="contactus">Contact Us</p>
          </div>

          <div className="partners">
            <div className="shopify">
              <img
                className="ptimgsize"
                src="https://www.xircls.com/static/images/website-slide/shopify-logo.png"
                alt=""
              />
              <p>Shopify</p>
            </div>

            <div className="woo">
              <img
                className="ptimgsize"
                src="https://www.xircls.com/static/images/website-slide/WooCommerce_logo.svg.png"
                alt=""
              />
              <p>Woo</p>
              <p>Commerce</p>
            </div>

            <div className="magneto">
              <img
                className="ptimgsize"
                src="https://www.xircls.com/static/images/website-slide/magento-logo.png"
                alt=""
              />
              <p>Magento</p>
            </div>
            </div>
          </div>

          <div className="column3"></div>
          <div className="column3section3">
            <div className="rtnos">
              <span>4481020</span>
              <h4>Real-Time Marketing Collaborations Enabled</h4>
            </div>
            <div className="partnercompanies">
              <span>111</span>
              <p>Partner Companies</p>
            </div>

            <div className="follow">
              <p>Follow Us:</p>
              <div className="icons">
              <a href=""><FaInstagram className="icon" /></a>
              <a href=""><FaFacebook className="icon" /></a>
          <a href=""><FaLinkedin className="icon" /></a>
          <a href=""><FaTwitter className="icon" /></a>
          <a href=""><FaYoutube className="icon" /></a>
          </div>
              {/* <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" /> */}
            </div>
          </div>
        
      </div>
    </>
  );
};

export default FooterHome;
