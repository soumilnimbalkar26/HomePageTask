import React from 'react'
import Icon from '../images/logo12.jpg'
import NextIcon from '../images/carouselleft.png'
import PrevIcon from '../images/carouselright.png'
import "./carousel.css"



const carousel = () => {
  return (
    <>
      <section className='section1'>
        <div className='outerdiv'>


            <div className='headinglogo'>
            <h2 className='heading2'>
                The<span>Worlds First Decentralized, Collaborative</span>Marketing Network
            </h2>
            <img className='imgbox' src={Icon} alt="icon" />
            </div>

            <div>
            <h3 className='text3'><i>Building the Web3 of Marketing</i></h3>
            </div>

            
            
            
            
            <div className='rowtext'>
              <div>
                <h1 className='percent'>100%</h1>
                <h6 className='percentstats'>Verified Cstomer Engagement</h6>
              </div>

              <div>
                <h1 className='percent'>3%</h1>
                <h6 className='percentstats'>Average Click Through</h6>
              </div>

              <div>
                <h1 className='percent'>13%</h1>
                <h6 className='percentstats'>Conversion Rate</h6>
              </div>
            </div>




            <div className='flexboxes'>
              <div className='flexcontainer'>
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

export default carousel