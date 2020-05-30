
import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ContactUs from './container/ContactUs';
import Post from './container/Post';


function App(){
    return(
        
          
           
                <Router>
        <div className="App">
            <Header/>
           <Hero/>
           <Route path="/Home"exact component={Home}/>
           <Route path="/ContactUs"exact component={ContactUs}/>  
           <Route path="/Post"exact component={Post}/> 

        </div>
        </Router>
           
        
    );
}

export default App;