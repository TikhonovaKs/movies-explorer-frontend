import React from 'react';
import { Link } from 'react-router-dom';
import './NavAuth.css';

function NavAuth() {
  return (
    <ul className="header__auth-links">
      <Link to="/signup">
        <li>
          <a href="#" className="header__registration-link">
            Регистрация
          </a>
        </li>
      </Link>
      <Link to="/signin">
        <li>
          <a href="#" className="header__login-link">
            Войти
          </a>
        </li>
      </Link>
    </ul>
  );
}
export default NavAuth;
