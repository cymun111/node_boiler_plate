import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo">MyApp</Link>
        <ul className="nav-links">
          <li><Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}
