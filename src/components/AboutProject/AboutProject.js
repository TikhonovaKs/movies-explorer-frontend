import React from 'react';
import './AboutProject.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

function AboutProject() {
  return (
    <div className="about">
      <BlockTitle title="О проекте" />
      <section className="about__info">
        <div className="about__paragraph">
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__description">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className="about__paragraph">
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </section>
      <section className="about__terms">
        <h4 className="about__weeks">1 неделя</h4>
        <h4 className="about__weeks">4 недели</h4>
        <h4 className="about__stage">Back-end</h4>
        <h4 className="about__stage">Front-end</h4>
      </section>
    </div>
  );
}
export default AboutProject;
