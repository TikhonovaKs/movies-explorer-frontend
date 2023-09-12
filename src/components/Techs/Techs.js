import React from 'react';
import './Techs.css';
import BlockTitle from '../BlockTitle/BlockTitle.js';

function Techs() {
  return (
    <div className="technologies">
      <BlockTitle title="Технологии" />
      <h2 className="technologies__title">7 технологий</h2>
      <p className="technologies__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <section className="technologies__list">
        <h4 className="technologies__name">HTML</h4>
        <h4 className="technologies__name">CSS</h4>
        <h4 className="technologies__name">JS</h4>
        <h4 className="technologies__name">React</h4>
        <h4 className="technologies__name">Git</h4>
        <h4 className="technologies__name">Express.js</h4>
        <h4 className="technologies__name">mongoDB</h4>
      </section>
    </div>
  );
}
export default Techs;
