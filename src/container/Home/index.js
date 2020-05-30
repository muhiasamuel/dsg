import React from 'react';
import './style.css';
import Homeposts from '../../components/Homeposts';

import Sidebar from '../../components/Sidebar';

const Home = props=>{
    return(
        <section className = "container">
            
            <Homeposts/>

           
           <Sidebar/>
            
        
        </section>
    );
}

export default Home;