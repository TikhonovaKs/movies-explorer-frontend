import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <ul className="movie__buttons-list">
        <li className="movie__button-item">
          <Link to="/movies">
            <button className="movie__button-movies" aria-label="Редактирование профиля" type="button">
              Фильмы
            </button>
          </Link>
        </li>
        <li className="movie__button-item">
          <Link to="/saved-movies">
            <button className="movie__button-movies" aria-label="Редактирование профиля" type="button">
              Сохранённые фильмы
            </button>
          </Link>
        </li>
      </ul>
      <Link to="/profile">
        <a href="#" className="movie__account">
          Аккаунт
        </a>
      </Link>
      <button className="movie__hidden-menu" aria-label="Drop down menu button" type="button"></button>
    </>
  );
}

export default Navigation;
