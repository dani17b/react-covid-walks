import React from 'react';
import './home.scss';
import Card from '../../components/card/Card';
import { connect } from 'react-redux';
import { findWalks } from './actions';

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
    // Cargar la info del servidor
    this.props.findWalks();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.walks.length != nextProps.walks.length) {
      setTimeout(
        () =>
          this.setState({
            itemsVisible: true
          }),
        1000
      );
    }
  }

  render() {
    return (
      <div className="home">
        <div>Hola {this.props.user.name}</div>
        <div className="home__list">
          {this.props.walks.map((item, i) => (
            <Card key={i} visible={this.state.itemsVisible} data={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default connect(
  store => ({
    walks: store.home.walks,
    user: store.login.userInfo
  }),
  dispatch => ({
    findWalks: () => dispatch(findWalks())
  })
)(Home);
