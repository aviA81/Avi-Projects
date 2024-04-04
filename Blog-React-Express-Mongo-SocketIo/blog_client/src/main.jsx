import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App.jsx';
import AddPost from './AddPost.jsx';
import Posts from './Posts.jsx';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Posts />
      },
      {
        path: '/addPost',
        element: <AddPost />
      },
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
