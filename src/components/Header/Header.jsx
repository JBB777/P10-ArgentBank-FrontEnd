import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';
import Logo from '../../assets/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import logout from '../../redux/userSlice';

function Header() {
  const username = useSelector((state) => state.profil.pseudo);
  const token = useSelector((state) => state.profil.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const disconnection = async () => {
    dispatch(logout());
    sessionStorage.removeItem('argentBankUserToken');
    navigate('/sign-in');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={Logo} alt="Logo ArgentBank" className="logo"></img>
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        {!token ? (
          <div>
            <Link to="/sign-in" className="navbar__item">
              <FontAwesomeIcon icon={faUserCircle} />
              Sign In
            </Link>
          </div>
        ) : (
          <div className="connected">
            <Link to="/user" className="navbar__item">
              <FontAwesomeIcon icon={faUserCircle} />
              {username}
            </Link>
            <Link to="/" className="navbar__item" onClick={disconnection}>
              <FontAwesomeIcon icon={faRightToBracket} />
              Logout
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
