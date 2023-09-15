import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="student__portfolio">
      <h3 className="student__portfolio-title">Портфолио</h3>
      <ul className="student__project-list">
        <li className="student__project-item">
          <a href="https://github.com/TikhonovaKs/how-to-learn.git" className="student__project-link" target="_blank">
            <span className="student__project-title">Статичный сайт</span>
            <span className="student__project-icon"></span>
          </a>
        </li>
        <li className="student__project-item">
          <a href="https://github.com/TikhonovaKs/russian-travel.git" className="student__project-link" target="_blank">
            <span className="student__project-title">Адаптивный сайт</span>
            <span className="student__project-icon"></span>
          </a>
        </li>
        <li className="student__project-item">
          <a
            href="https://github.com/TikhonovaKs/react-mesto-api-full-gha.git"
            className="student__project-link"
            target="_blank"
          >
            <span className="student__project-title">Одностраничное приложение</span>
            <span className="student__project-icon"></span>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
