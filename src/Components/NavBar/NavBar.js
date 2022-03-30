import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-links">
        <Link className="navbar-link" to="/sign-in">
          Sign In
        </Link>
        <Link className="navbar-link" to="/sign-up">
          Sign Up
        </Link>
        <Link className="navbar-link" to="/change-password">
          Change Password
        </Link>
        <Link className="navbar-link" to="/sign-out">
          Sign Out
        </Link>
        <Link className="navbar-link" to="/home">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
