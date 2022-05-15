import React from 'react'
import '../styles/card.scss'

const Card = (props) =>
{
    return (
<div className='Card'>

    <img  className='picture' src={props.img}/ >
    <p className='CardDescription'>{props.description}</p>
    <p className='Rent'>Rent- {props.rent}/ -P.M</p>

</div>



    )



}
export default Card
