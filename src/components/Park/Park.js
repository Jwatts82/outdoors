import React from 'react';
import './Park.css';

export default function Park({ park, img }) {
  return (
    <div class='content-wrapper'>
      <div className='park-card'>
        <img src={img} alt='' className='src' />
        <div className='park-card_text-wrapper'>
          <h2 className='park-card_name'>{park}</h2>
          <div className='park-card_details-wrapper'>
            <p className='park-card_excerpt'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum beatae eum, sunt iure amet ad!&hellip;
            </p>
            <a href='#' className='park-card_read-more'>
              Read More <i className='fas fa-long-arrow-alt-right' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
