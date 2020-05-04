import React from 'react';
import './card.scss';
import { useTranslation } from 'react-i18next';

// class Card extends React.Component { // Este caso deberiamos implementar el render
// function Card(props){
const Card = props => {
  const { data, visible, onClick } = props;
  const { t } = useTranslation('common');

  return (
    <div
      className={'card' + (visible ? ' visible' : '')}
      onClick={() => (onClick ? onClick() : null)}
    >
      <div className="content">{data.name}</div>
      <div className="options">
        <div>{t('elemento1.descripcion')}</div>
        <div>{t('elemento2.descripcion')}</div>
        <div>{t('elemento3.descripcion')}</div>
      </div>
    </div>
  );
};

export default Card;
