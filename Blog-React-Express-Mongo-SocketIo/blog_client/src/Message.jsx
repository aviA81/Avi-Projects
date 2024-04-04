import './styles/Message.css';
import PropTypes from 'prop-types';

export default function Message({ message, setMessage }) {
  function hideBox() {
    setMessage(null);
  }
  return (
    <>
      {message ?
        <div className="alert">
          <span className="closebtn" onClick={hideBox}>&times;</span>
          {message}
        </div>
        : ''
      }
    </>
  )
}

Message.propTypes = {
  message :PropTypes.node,
  setMessage: PropTypes.func.isRequired
}