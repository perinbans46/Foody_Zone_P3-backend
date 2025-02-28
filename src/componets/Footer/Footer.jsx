import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='last'>
    <hr />
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>
Satisfy your hunger with fresh, flavorful, and fast food, made just for you! Whether it's a cheesy pizza, a juicy burger, or a spicy bowl of noodles, we've got your cravings covered. Order now and treat yourself to a mouthwatering meal delivered straight to your doorstep. Deliciousness is just a click away! 🚀🔥 </p>

                <div  className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>    
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Polices</li>
                </ul>

            </div>

            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-8072223457</li>
                    <li>perinbans46@gmail.com</li>
                </ul>
            </div>
            
        </div>
         <hr />
         <p className="footer-copyright">Copyright 2025 @ FoodyZone </p>
    </div>
    </div>
  )
}

export default Footer
