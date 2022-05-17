import {React} from 'react'
// import '../styles/bootstrap.min.css';
import '../index.css';
import '../styles/nav.css';
// import { ReactDOM } from 'react';
import logo from "../assets/logo.png"
import HouseLogo from "../images/house.svg"

export default function Rentkart() {
  // const toggleNavbar = () => {
  //   nav_header.classList.toggle("active");
  // };
  
  // mobile_nav.addEventListener("click", () => toggleNavbar())
  return (
    <header className="header sticky" >
      <a href="#" target="_blank">
        <img 
        src={logo}
        alt="Just Rent it"
        className="logo"/>
      </a>   
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a className="navbar-link" href="#">Services</a></li>
          <li>
            <a
              className="navbar-link"
              href="landlord"
              target="_blank"
              >
                <img src={HouseLogo} alt="logo" />
                List Your Property
              </a>
          </li>
          <li><a href="#"><div className="btn btn-outline-primary myButton1">Login</div></a></li>
        </ul>
      </nav>

      <div  className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
  )
}
