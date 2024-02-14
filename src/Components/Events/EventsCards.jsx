import React from 'react';
import './EventsCards.css';
import { useNavigate } from 'react-router-dom';

function EventsCards({ category, length }) {
  const navigate = useNavigate();
  const cards = [];
  const numCards = length;
  console.log(category);
  for (let i = 0; i < numCards; i++) {
    cards.push(
      <div className="col" onTouchStart= {
        () => {
          this.classList.toggle('hover');
        }
        
      } key={i} >
        <div className="container" onClick={() => {navigate('/categories/'+ category[i].id)}}>
          <div className="front" style={{ backgroundImage: `url(${category[i].background_image})` }}>
            <div className="inner">
              <p>{category[i].id}</p>
              <span>{category[i].name}</span>
            </div>
          </div>
          <div className="back">
            <div className="inner">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <h1></h1>
      <div className="cols">
        {cards}
      </div>
    </div>
  );
}


export default EventsCards;
