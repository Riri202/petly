/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Button from './Button';
import './CardItem.css'

function CardItem({ src, text, breed, state, city }) {
  return <div className='card-container'>
      <div className='card-img'>
          <img src={src}/>
      </div>
      <div className='card-info'>
          <div card-info-left>
              <h4>{text}</h4>
              <p>{breed}</p>
          </div>
          <div className='card-info-right'>
              <p>Animal pic</p>
          </div>
      </div>
      <div className='card-bottom'>
          <Button text='View Details'/>
            <p>{city}, {state}</p>
      </div>

  </div>;
}

export default CardItem;
