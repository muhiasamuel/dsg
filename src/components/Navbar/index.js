import React, { useState } from 'react';
import{FontAwesomeIcon}from '@fortawesome/react-fontawesome';


import './style.css'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom'

const Navbar = (props) => {
    const[search, setSearch] = useState(false);
    const submitSearch = (e)=>{
        e.preventDefault();
        alert("searched");
    }
    const openSearch = ()=>{
    setSearch(true);
    }
    const searchClass = search?'searchinput active' : 'searchinput';

    return (
        <div className="navbar">
            <ul className="navbarmenu">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/About us">About Us</NavLink></li>
                <li><NavLink to="/Post">Posts</NavLink></li>
                <li><NavLink to="/ContactUs">Contact Us</NavLink></li>

            </ul>
            <div className = "search">
                <form onSubmit ={submitSearch}>
                <input type="text"className={searchClass} placeholder="search"/>
                <FontAwesomeIcon  onClick={openSearch} className = "Searchicon" icon={faSearch}  size ="sm" />  
                </form>
               
            </div>
        </div>
    )
}

export default Navbar
