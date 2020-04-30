import React from 'react';
import './card.scss';

// class Card extends React.Component { // Este caso deberiamos implementar el render
// function Card(props){
const Card = props => {
  const { data, visible, onClick } = props; 

  return (
    <div
      className={'card' + (visible ? ' visible' : '')}
      onClick={() => (onClick ? onClick() : null)}
    >
      <div className="content">{data.name}</div>
      <div className="options">
        <div>elemento 1</div>
        <div>elemento 2</div>
        <div>elemento 3</div>
      </div>
    </div>
  );
};

export default Card;
