import React, { PureComponent } from 'react'

import './style.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faTelegramPlane, faWhatsappSquare, faLinkedinIn, faGitSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

class Header extends PureComponent {
    render() {
        return (
           <header className="header">
               <nav className="headermenu">
               <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/About us">About Us</NavLink></li>
                <li><NavLink to="/Post">Posts</NavLink></li>
                </nav>
                <div className ="socialMediaIcons">
                <a href = "https://facebook.com/Samuel Ngugi"><FontAwesomeIcon className="fbicon" icon = {faFacebookSquare} size='1x' /></a>
          <FontAwesomeIcon className="fbicon" icon = {faTwitterSquare} size='1x' />
          <FontAwesomeIcon className="fbicon" icon = {faTelegramPlane} size='1x' spin />
          <FontAwesomeIcon className="watsappicon" icon = {faWhatsappSquare} size='1x' />
          <FontAwesomeIcon className="fbicon" icon = {faLinkedinIn} size='1x' />
          <FontAwesomeIcon className="fbicon" icon = {faGitSquare} size='1x' />
          <FontAwesomeIcon className="fbicon" icon = {faInstagramSquare} size='1x' />
          </div>
                
           </header>
        );
    }
}

Header.propTypes = {};

export default Header;
