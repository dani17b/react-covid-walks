import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './carrusel.scss';

const Carrusel = () => {
  const photo1 =
    'https://www.runtastic.com/blog/wp-content/uploads/2017/12/ES_ActivityTab_Yellow_And-1.png';
  const photo2 =
    'https://www.runtastic.com/blog/wp-content/uploads/2017/12/ES_Progress_DetailView_And-2.png';
  return (
    <div className="carousel-element">
      <Carousel>
        <div className="phto">
          <img src={photo1} alt="Descripcion de la foto"/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={photo2} alt="Descripcion de la foto"/>
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Carrusel;
