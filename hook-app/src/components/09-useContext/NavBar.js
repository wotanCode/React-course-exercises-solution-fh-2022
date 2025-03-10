import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {

  return (

    <nav className="navbar navbar-expand-lg bg-dark">



      <div className="container-fluid">
        <Link className="navbar-brand" to="./">useContext</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to='./'>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to='./login'>Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to='about'>About</NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}