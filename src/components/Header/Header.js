import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'


const Header = () => {
    return (
        <div className="d-flex align-items-center text-white bg-dark header">
        
            <div className="header-1"><img id="logo" src={logo} alt="logo" /> </div>
        

      
            <div className="header-1">
            <form className="form" >
            <input className="form-input" type="text" placeholder="Search" name="search"></input>
            <button type="button" className="btn btn-primary"  >Submit</button>
            </form>
            </div>
         

 
            <div className="header-1"> <a id="home" href="/home">Home</a></div>
            <div className="header-1"><a id="courses" href="/courses">Courses</a></div>
            <div className="header-1"><a id="blog" href="/blog">Blog</a></div>
            <div className="header-1"><button type="button" className="btn btn-primary" id="sign-up" >Sign Up</button></div>
            <div className="header-1"><button type="button" className="btn btn-primary" id="sign-in">Sign In</button></div>
       
        
     
        </div>
    );
};

export default Header;