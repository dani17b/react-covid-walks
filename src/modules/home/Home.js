import React from 'react';
import './home.scss';

/*function Home(props) {
  return (
    <div className="home">
      <div className="home__list">
        Hola mundo
        <div className="home item">Item</div>
      </div>
    </div>
  );
} */

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <div className="home__list">
          Hola mundo
          <div className="home item">Item</div>
        </div>
      </div>
    );
  }
}

export default Home;
