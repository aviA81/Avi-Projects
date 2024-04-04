import { useEffect, useState } from 'react';
import Post from './Post';
import io from 'socket.io-client';

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:8080/posts');
        const posts = await response.json();
        console.log(posts);
        setPosts(posts);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  useEffect(() => {
    //console.log('setting up socket io connection');

    const socketIo = io('http://localhost:8080');
    socketIo.on('post', post => {
      console.log('got new post', post);

      const newPosts = [...posts];
      newPosts.push(post);
      setPosts(newPosts);
    });

    return () => {
      socketIo.close();
    }
  }, [posts]);

  return (
    <div>
      {posts.map(post => <Post post={post} />)}
    </div>
  )
}
