import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="student__portfolio">
      <h3 className="student__portfolio-title">Портфолио</h3>
      <ul className="student__project-list">
        <li className="student__project">
          <a href="#" className="student__project-link">
            Статичный сайт
          </a>
          <button className="student__arrow-button" aria-label="Переход на страницу проекта" type="button"></button>
        </li>
        <li className="student__project">
          <a href="#" className="student__project-link">
            Адаптивный сайт
          </a>
          <button className="student__arrow-button" aria-label="Переход на страницу проекта" type="button"></button>
        </li>
        <li className="student__project">
          <a href="#" className="student__project-link">
            Одностраничное приложение
          </a>
          <button className="student__arrow-button" aria-label="Переход на страницу проекта" type="button"></button>
        </li>
      </ul>
    </div>
  );
}
export default Portfolio;
