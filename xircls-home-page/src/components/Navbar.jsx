import React from 'react'
import logo from '../images/xircls-logo.png'
import './Navbar.css'
import DropDown from '../images/dropdownicon.png'
// import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <>
        
        <navbar className='navbar'>
            <ul className='list'>

                <div className='spacing'>

                <div className='logo'>
                <li>
                    <a href="#">
                        <img src={logo} alt="img" />
                    </a>
                </li>
                </div>
                

                <div className='navlinks'>
                <li className='linktext'>
                    <a href="#">Home</a>
                </li>

                <li className='linktext'>
                <a href="#">About us</a>
                <img className='dropdown' src={DropDown} alt="" />
                </li>

                <li className='linktext'>
                <a href="#">Products</a>
                <img className='dropdown' src={DropDown} alt="" />

                </li>

                <li className='linktext'>
                <a href="#">Blog</a>

                </li>

                <li className='linktext'> 
                <a href="#">Team</a>

                </li>

                <li className='linktext'>
                <a href="#">Sign-Up</a>
                <img className='dropdown' src={DropDown} alt="" />
                </li>

                <li className='linktext'>
                <a href="#">Login</a>
                <img className='dropdown' src={DropDown} alt="" />
                </li>
                </div>
                </div>
                
            </ul>
        </navbar>
    </>
  )
}

export default navbar