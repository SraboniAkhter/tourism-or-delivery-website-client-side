import React from 'react';
import './Footer.css';
import { faFacebookF, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">The Roam offers a deep portfolio of strategic solutions and a robust ecosystem of events around the world. With specialized expertise in research, education, media and promotion, Adventure 360 offers valuable support for managing a broad set of challenges across many areas of your business."..</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><Link to="/">home</Link></li>
              <li><Link to="/destination">Destination</Link></li>
              <li><Link to="/tour">Tour</Link></li>
              <li><Link to="/service">services</Link></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              <li><Link to="#">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright 2021 All Rights Reserved by 
          <Link to="#">Roam</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><Link className="facebook" to="https://www.facebook.com/"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></Link></li>
              <li><Link className="google" to="https://www.google.com/"><FontAwesomeIcon className="icon" icon={faGoogle} /></Link></li>
              <li><Link className="instagram" to="https://www.instagram.com/"><FontAwesomeIcon className="icon" icon={faInstagram} /></Link></li>   
            </ul>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;