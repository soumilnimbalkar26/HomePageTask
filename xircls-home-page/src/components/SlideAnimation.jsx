import React from "react";
import {Carousel} from "react-bootstrap";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide1 from "./Slide1";
import './SlideAnimation.css'

const SlideAnimation = () => {
  return (
    <>
      <Carousel> 
        <Carousel.Item>
          <Slide1 />
          
        </Carousel.Item>
        <Carousel.Item>
          <Slide2 />
          
        </Carousel.Item>
        <Carousel.Item>
          <Slide3 />
          
        </Carousel.Item>
      </Carousel>

      
      
    </>
  );
};

export default SlideAnimation;
