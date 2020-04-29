import React from 'react';
import { connect } from 'react-redux';
import './login.scss';
import { login } from './actions';

class Login extends React.Component {
  // function Login(props) {
  //const { login, loading } = props;

  /* const [loginInfo, setLoginInfo] = useState({
    login: '',
    password: ''
  }); */
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  render() {
    const { login, loading } = this.props;

    return (
      <div className="login">
        {!loading && (
          <form
            className="login__form"
            onSubmit={e => {
              e.preventDefault();

              login({...this.state});
              // login(loginInfo);
            }}
          >
            <input
              type="text"
              className="login__form__input"
              placeholder="Nombre de usuario"
              value={this.state.login}
              onChange={e => this.setState({ login: e.target.value })}
            />
            <input
              type="password"
              className="login__form__input"
              placeholder="Contraseña"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button className="login__form__button">Iniciar sesión</button>
          </form>
        )}
        {loading && <div className="login__loading">Cargando</div>}
      </div>
    );
  }
}

export default connect(
  store => ({
    loading: store.login.loading
  }),
  dispatch => ({
    login: credentials => dispatch(login(credentials))
  })
)(Login);
