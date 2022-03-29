import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <div className="navbar-links">
        <Link classname="navbar-link" to="/sign-in">
          Sign In
        </Link>
        <Link classname="navbar-link" to="/sign-up">
          Sign Up
        </Link>
        <Link classname="navbar-link" to="/change-password">
          Change Password
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
