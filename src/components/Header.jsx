//import './Header.css';
//import BurgerMenu from './burger_menu.js';
import {CustomLink} from './CustomLink';
import { ChangeTheme } from './ChangeTheme';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__row">
          <div className="header__logo">
            <Link to="/" className="header__logo">ftCypeeM</Link>
          </div>
          <div className="header__menu">
            {/* <div className="login-btn">
              <Link to="/login" className="btn">Login</Link>
            </div> */}
            <ChangeTheme />
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };