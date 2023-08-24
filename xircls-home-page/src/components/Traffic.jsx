import React from 'react'
import './Traffic.css'
import Bounce from '../images/bounce-rate.png'
import Conversion from '../images/conversion.png'
import Magnet from '../images/magnet.png'

const Traffic = () => {
  return (
    <>
        <section className='section3'>
        <div className='overallsection3'>
            <div className='section3content'>
            <h3>Drive high quality traffic to your website.</h3>
            <h3>Optimize for more conversions!</h3>
            <h4>Leverage collaborations to transform your website sales funnel.</h4>
            </div>

          <div className='section3images'>
                <div className='imgcontent'>
                  <div className='imgsection3'>
                    <img className='imagesize' src={Bounce} alt="bounce" />
                  </div>
                  <div className='imgtext'>
                    <h4 className='bigfont'>Reduce bounce rates.</h4>
                    <h6 className='smallfont'>Get genuine, verified traffic from your
                    partners to your e-commerce storefront.</h6>
                  </div>
                </div>

                <div className='imgcontent'>
                  <div className='imgsection3'>
                    <img className='imagesize' src={Conversion} alt="bounce" />
                  </div>
                  <div className='imgtext'>
                    <h4 className='bigfont'>Convert with instant rewards.</h4>
                    <h6 className='smallfont'>Incentivize actions and purchases with partner offers.</h6>
                  </div>
                </div>

                  <div className='imgcontent'>
                    <div className='imgsection3'>
                    <img className='imagesize' src={Magnet} alt="bounce" />
                    </div>
                    <div className='imgtext'>
                      <h4 className='bigfont'>Improve customer retention.</h4>
                      <h6 className='smallfont'>Promise partner offers on future actions & purchases. Kick off a perpetual rewards loop!</h6>
                  </div>
                </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Traffic