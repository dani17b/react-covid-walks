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

    this.state = {
      itemsVisible: false
    };
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          itemsVisible: true
        }),
      1000
    );
  }

  getData() {
    const data = [
      {
        id: 1,
        name: 'Paseo 1'
      },
      {
        id: 2,
        name: 'Paseo 2'
      },
      {
        id: 3,
        name: 'Paseo 3'
      },
      {
        id: 4,
        name: 'Paseo 4'
      },
      {
        id: 5,
        name: 'Paseo 5'
      }
    ];

    return data;
  }

  renderItem(data) {
    return (
      <div class={'item' + (this.state.itemsVisible ? ' visible' : '')}>
        <div class="content">{data.name}</div>
        <div class="options">
          <div>elemento 1</div>
          <div>elemento 2</div>
          <div>elemento 3</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="home">
        <div className="home__list">
          {this.getData().map(item => this.renderItem(item))}
        </div>
      </div>
    );
  }
}

export default Home;
