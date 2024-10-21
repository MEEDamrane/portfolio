import React from 'react'
import './Footer.css'
import logo from '../../assets/dalle.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img  width={"150px"} src={logo} alt="" />
                <p>I am student now</p>
            </div>
            <dip className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Let's connect</div>
            </dip>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">©Amrane Mohamed, All rights reserved. </p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer