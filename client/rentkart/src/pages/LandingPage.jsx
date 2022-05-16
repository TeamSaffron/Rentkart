import React from 'react'
import { Link } from 'react-router-dom';

import Banner from "../images/rentKartBanner.webp"
import { BenefitsData, CardList } from '../static/Cards';
import Card from '../component/Card';
import "../styles/_landingPage.scss";

export default function LandingPage() {
  return (
    <div className='landing-container'>
      <img src={Banner} alt="banner" className='landing-container__banner'/>
      <h1><span className='title'>RentKart</span>- Just Rent it!!</h1>
      <h2>Available Rooms</h2>
      <div className='landing-container__room-cards'>
        {CardList.map((card) =>
        <Link to={`room/:${card.id}`} > 
          <Card roomPhoto={card.img} description={card.description} key={card.id} rentalPrice={card.rentalPrice} />
        </Link>
        )}
      </div>
      <Link to="room-list" >
        <span className='landing-container__explore-btn'>View All Rooms</span>
      </Link>
      <span className='benefit-heading'>Benefits of Listing with us</span>
      <div className='flex-row benefit_container'>
        {BenefitsData.map((benefit, index) => 
          <div className='benefit_box' key={index} >
            <img className='benefit_box__img' src={benefit.img} alt={benefit.title} />
            <div className='benefit_box__text'>
              <span className='benefit-title'>{benefit.title}</span>
              <p className='benefit-description'>{benefit.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
