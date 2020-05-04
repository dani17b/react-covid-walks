import React, { useState } from 'react';
import './newWalk.scss';

const WalkInfo = () => {
  const [walk, setWalk] = useState({
    distance: '',
    time: '',
    date: ''
  });

  return (
    <div className="new_walk">
      <form
        className="new_walk__form"
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <span>Distancia: </span>
        <input
          className="new_walk__form__input"
          type="number"
          value={walk.distance}
          onChange={e => setWalk({ ...walk, distance: e.target.value })}
        />
        <span>Tiempo: </span>
        <input
          className="new_walk__form__input"
          type="time"
          placeholder="Tiempo"
          value={walk.time}
          onChange={e => setWalk({ ...walk, time: e.target.value })}
        />
        <span>Fecha: </span>
        <input
          className="new_walk__form__input"
          type="date"
          placeholder="Fecha"
          value={walk.login}
          onChange={e => setWalk({ ...walk, date: e.target.value })}
        />
        <p>
          <button
            className="new_walk__form__button"
            onClick={() => (window.location = '/')}
          >
            Añadir
          </button>
        </p>
      </form>
    </div>
  );
};

export default WalkInfo;
