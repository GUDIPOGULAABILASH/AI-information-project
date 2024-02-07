import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step into future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechtrwoord K12 182 DK Alknijkcb, All rights reserved</p>
        </div>
        <div className="gp3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
          <p>Overons</p>
        </div>
        <div className="gp3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gp3__footer-links_div">
          <h4>Get in Touch</h4>
          <p>Crechtrwoord K12 182 DK Alknijkcb</p>
          <p>086-58452558</p>
          <p>tech@paen.net</p>
        </div>

      </div>
      <div className="gpt3__footer-copyright">
        <p>2021 GPT-3. All rights reserved</p>
      </div>
      
    </div>
  )
}

export default Footer