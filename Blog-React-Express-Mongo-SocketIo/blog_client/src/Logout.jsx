import PropTypes from 'prop-types';

export default function Logout({ username, setUsername, setMessage }) {
  async function logout() {
    try {
      const response = await fetch('http://localhost:8080/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      setMessage('Logged out');
      setUsername(null);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>Logged in as {username} <button onClick={logout}>logout</button></div>
  )
}

Logout.propTypes = {
  setMessage: PropTypes.func.isRequired,
  username :PropTypes.node.isRequired,
  setUsername: PropTypes.func.isRequired
}