import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Post({ postDetails }) {
    return (
        <div className="post">
            <h4>
                Title:
                <div>{postDetails.title}</div>
            </h4>
            <p>{postDetails.body}</p>
            <Comment postId={postDetails.id} />
        </div>
    )
}

Post.propTypes = {
    postDetails: PropTypes.shape({
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}