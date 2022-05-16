import React from 'react';
import {Link} from 'react-router-dom';

import { CardList } from '../static/Cards'
import Card from '../component/Card'

export default function RoomsPostedList() {
  return (
    <div>
      <h1>All Posted Rooms</h1>
      <Link to="post-room">
        <button>+</button>
      </Link>
      <div className='flex-row'>
        {CardList.map((card) =>
          <Card roomPhoto={card.img} description={card.description} key={card.id} rentalPrice={card.rentalPrice}>
            <Link to={`update/:${card.id}`}>
              <button>Update</button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  )
}
