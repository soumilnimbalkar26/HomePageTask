import React from 'react'
import Decentralized from '../images/decentralized.jpg'
import Peertopeer from '../images/peer-to-peer.jpg'
import Blockchain from '../images/blockchain.jpg'
import Shield from '../images/shield.jpg'
import './Globalnetwork.css'

const Globalnetwork = () => {
  return (
    <>
    <section className='section7 py-5'>
        <div className='section7container1'>
          <h3>Join a Global Network of Companies</h3>
        </div>

    <div className='alignimages'>
        <div className='image-text-container'>
          <div className='image'>
          <img className='img-fluid' style={{ width: '64px', height: '64px' }} src={Decentralized} alt="decentralized" />
          </div>
          <div className='text'>
            <h4>DECENTRALIZED</h4>
            <h5>Global network of companies with no third-party or central authority.</h5>
          </div>
        </div>



        <div className='image-text-container'>
          <div>
          <img className='img-fluid' style={{ width: '64px', height: '64px' }} src={Peertopeer} alt="decentralized" />
          </div>
          <div className='text'>
            <h4>PEER-TO-PEER VERIFIED</h4>
            <h5>Real-time customer verification by companies.</h5>
          </div>
        </div>



        <div className='image-text-container'>
          <div>
          <img className='img-fluid' style={{ width: '64px', height: '64px' }} src={Blockchain} alt="decentralized" />
          </div>
          <div className='text'>
            <h4>LEDGER-BASED</h4>
            <h5>A ledger-based verification model that encompasses transactions and actions.</h5>
          </div>
        </div>



        <div className='image-text-container'>
          <div>
          <img className='img-fluid' style={{ width: '64px', height: '64px' }} src={Shield} alt="decentralized" />
          </div>
          <div className='text'>
            <h4>NO DATA SHARING</h4>
            <h5>Customer data remains localized and 100% secure with built-in data protocols.</h5>
          </div>
          </div>
        </div>
      </section>
      </>
  )
}

export default Globalnetwork