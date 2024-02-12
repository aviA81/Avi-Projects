import { useLoaderData } from "react-router-dom"
import Blog from "./Blog";
import Post from "./Post";

export default function BlogDetails() {
    const { posts, user } = useLoaderData();

    return (
        <>
            <Blog user={user[0]} />
            {posts.map(post => (<Post postDetails={post} key={post.id} />))}
        </>
    )
}
