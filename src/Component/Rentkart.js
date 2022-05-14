import {React} from 'react'
import '../styles/bootstrap.min.css';
import '../index.css';
import '../styles/nav.css';
// import { ReactDOM } from 'react';
import logo from "../assets/logo.png"

export default function Rentkart() {
  // const toggleNavbar = () => {
  //   nav_header.classList.toggle("active");
  // };
  
  // mobile_nav.addEventListener("click", () => toggleNavbar())
  return (
    <div>
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
              href="#"
              target="_blank"
              ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
              </svg>List Your Property</a>
          </li>
          <li><a href="#"><div className="btn btn-outline-primary myButton1">Login</div></a></li>
        </ul>
      </nav>

      <div  className="mobile-navbar-btn">
        <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
      </div>
    </header>
     <main> 
    <section className="section-hero">
        <div className="hero">
          <p>main section content</p>
        </div>  
      </section>
    </main>
    </div>
  )
}
