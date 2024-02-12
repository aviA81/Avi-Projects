import App from './App';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetails from './BlogDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <BlogList />
      },
      {
        path: 'blog/:id',
        element: <BlogDetails />,
        loader: async ({ params }) => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`);
          const posts = await response.json();
          const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users?id=${params.id}`);
          const user = await userResponse.json();
          return {posts, user};
        },
      },
      {
        path: '*',
        element: <Navigate to="/" replace={true} />
      }
    ]
  }
]);

export default router;
