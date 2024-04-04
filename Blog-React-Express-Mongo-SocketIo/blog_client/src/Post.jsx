import './styles/Post.css';
import PropTypes from 'prop-types';

export default function Post(props) {
  const {_id, title, body, author, date} = props.post;
  return (
    <div className="post">
      <span hidden>{ _id }</span>
      <h2 className='title'>{ title }</h2>
      <h3 className='author'>by { author } on { new Date(date).toLocaleString() }</h3>
      <article>{ body }</article>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
}