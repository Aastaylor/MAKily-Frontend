import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <h1 className='logo'>MAKily</h1>
        {/* <img src={assets.logo} alt="" /> */}
        <p>Savor the art of dining without stepping out of your comfort zone. Our food delivery platform is more than a service — it's a curated culinary experience. Discover an exquisite array of dishes, crafted by the finest chefs and delivered fresh to your doorstep. From gourmet indulgences to everyday favorites, we bring the world’s flavors to your table with just a few clicks. Experience seamless ordering, prompt deliveries, and a taste that lingers. Because dining should be a pleasure, not a task.</p>
        <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-right">
<h2>COMPANY</h2>
<ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Delivery</li>
    <li>Privacy Policy</li>
</ul>
        </div>
        <div className="footer-content-center">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91-9876543210</li>
    <li>aastha@makily.com</li>
</ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
        Copyright 2025 © MAKily.com - All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
