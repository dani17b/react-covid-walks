import React from 'react';
import './home.scss';
import Card from '../../components/card/Card';

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

  render() {
    return (
      <div className="home">
        <div className="home__list">
          {this.getData().map((item, i) => (
            <Card key={i} visible={this.state.itemsVisible} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
