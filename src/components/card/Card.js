import React from 'react';
import './card.scss';

// class Card extends React.Component { // Este caso deberiamos implementar el render
// function Card(props){
const Card = props => {
  const { data, visible } = props;
  return (
    <div className={'card' + (visible ? ' visible' : '')}>
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
