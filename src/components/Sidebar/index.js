import React from 'react';
import './style.css';
import Card from '../UI/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare, faTwitterSquare, faTelegram, faLinkedinIn, faWhatsappSquare, faGitSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';


const Sidebar = (props) => {
    return (
       <div className ="sidebarContainer" >
       <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
       <div className = "cardHeader">
          <span>About Us</span>
          </div> 
          <div className = "sidebarImage">
             <img src = {require("../../set2/Nature-viev.jpg")} alt = "Samtec"/>
          </div>
          <div className = "myProfile">
             <h3>Brief Profile</h3>
             <p>My name is Samuel Muhia. Am a software developer and a full-stack web developer.I love learning new things and I love new challenges. 
                <br/>Am doing this blog as part of learning how to use react js as so that I can develop powerful front end web applications which are easier to integrate with apis </p>
          </div>
       </Card>
       <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
       <div className = "cardHeader">
          <span>Social Network</span>
         
          </div> 
          <div>
          <a href = "https://facebook.com/Samuel Ngugi"><FontAwesomeIcon className="fbicon" icon = {faFacebookSquare} size='2x' /></a>
          <FontAwesomeIcon className="fbicon" icon = {faTwitterSquare} size='2x' />
          <FontAwesomeIcon className="fbicon" icon = {faTelegram} size='2x' spin />
          <FontAwesomeIcon className="watsappicon" icon = {faWhatsappSquare} size='2x' />
          <FontAwesomeIcon className="fbicon" icon = {faLinkedinIn} size='2x' />
          <FontAwesomeIcon className="fbicon" icon = {faGitSquare} size='2x' />
          <FontAwesomeIcon className="fbicon" icon = {faInstagramSquare} size='2x' />
          </div>
       </Card>
       <Card style={{marginBottom:'20px', padding:'20px', boxSizing:'border-box'}}>
       <div className = "cardHeader">
          <span>Recent Posts</span>
          </div> 
          <div className ="recentPosts" >
          <div className ="recentPost" >
             <h3 className ="recentPostTitle" >Post Title</h3>
             <span>jun 15t 2020 </span>
             </div> 
             <div className ="recentPost" >
             <h3 className ="recentPostTitle" >Post Title</h3>
             <span>jun 15t 2020 </span>
             </div>
             <div className ="recentPost" >
             <h3 className ="recentPostTitle" >Post Title</h3>
             <span>jun 15t 2020 </span>
             </div>
          </div>
          
       </Card>
       </div>
      
    )
}

export default Sidebar
