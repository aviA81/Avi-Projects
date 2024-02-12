import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function Blog({ user }) {
    return (
        <div className="user">
            <Link to={`/blog/${user.id}`}>
                <h3>{user.name}&apos;s Blog</h3>
            </Link >
            <div className="website">{user.website}</div>
            Company: {user.company.name}, Catchphrase: {user.company.catchPhrase}, Description: {user.company.bs}
        </div>
    )
}

Blog.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        company: PropTypes.shape({
            name: PropTypes.string.isRequired,
            catchPhrase: PropTypes.string.isRequired,
            bs: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
}