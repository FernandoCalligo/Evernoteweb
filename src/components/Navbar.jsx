import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
