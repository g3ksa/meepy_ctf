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
            <Link to="/" className="header__logo">икнаб <span>И</span> ырошфО</Link>
          </div>
          <div className="header__menu">
            <div className="menu__item">
              <CustomLink to="/stats" className="menu__link">Статистика</CustomLink>
            </div>
            <div className="menu__item">
              <CustomLink to="/tasks" className="menu__link">Цели и задачи</CustomLink>
            </div>
            <div className="menu__item">
              <CustomLink to="/team" className="menu__link">Команда</CustomLink>
            </div>
            <div className="menu__item">
              <CustomLink to="/sources" className="menu__link">Источники</CustomLink>
            </div>
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