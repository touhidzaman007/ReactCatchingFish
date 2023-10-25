import PropTypes from 'prop-types';

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign into manage your store's</p>
    <button className="github" onClick={() => props.authenticate('Github')}>
      Login with Github
    </button>
    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Login with Twitter
    </button>

    <button className="google" onClick={() => props.authenticate('Google')}>
      Login with Google
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
