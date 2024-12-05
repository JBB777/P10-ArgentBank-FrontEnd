import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Logo from '../../assets/argentBankLogo.png';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="Logo ArgentBank" className="logo"></img>
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div>
          <Link to="/sign-in" className="navbar__item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
