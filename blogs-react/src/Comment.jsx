import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Comment({ postId }) {
    const [state, setState] = useState();
    const [showingComments, setShowingComments] = useState();

    useEffect(() => {
        (async function () {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
            const comments = await response.json();

            const commentsArray = comments.map(comment => (
                <div className="comment" key={comment.id}>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                </div>
            ));
            setState(commentsArray);
        }());
    }, [postId]);

    return (
        <div>
            <button onClick={() => setShowingComments(!showingComments)}>{showingComments ? 'Hide' : 'Show'} Comments</button>
            {showingComments ? [...state] : undefined}
        </div>
    )
}

Comment.propTypes = {
    postId: PropTypes.number.isRequired
}
