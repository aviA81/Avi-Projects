import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <h1>Best Blogs on the Web</h1>
        <Link to="/">Home</Link>
    </header>
  )
}
