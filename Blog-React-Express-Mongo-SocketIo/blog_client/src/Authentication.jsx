import Login from './Login';
import Logout from './Logout';
import './styles/Authentication.css';
import PropTypes from 'prop-types';

export default function Authentication({ setMessage, username, setUsername }) {
  return (
    <div id="authentication">
      {username ? <Logout setUsername={setUsername} username={username} setMessage={setMessage} /> : <Login setUsername={setUsername} setMessage={setMessage} />}
    </div>
  )
}

Authentication.propTypes = {
  setMessage: PropTypes.func.isRequired,
  username :PropTypes.node,
  setUsername: PropTypes.func.isRequired
}