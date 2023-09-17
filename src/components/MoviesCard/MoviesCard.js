import React from 'react';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <>
      <li className="element">
        <img
          className="element__image"
          src="https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg"
          alt="Movie card"
        />
        <div className="element__description">
          <h2 className="element__name">Cat is my pet</h2>
          <button className="element__save-button" aria-label="Cохранение понравившегося фильма" type="button"></button>
          <h3 className="element__duration">1ч30мин</h3>
        </div>
      </li>

      <li className="element">
        <img
          className="element__image"
          src="https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg"
          alt="Movie card"
        />
        <div className="element__description">
          <h2 className="element__name">Cat is my pet</h2>
          <button className="element__save-button" aria-label="Cохранение понравившегося фильма" type="button"></button>
          <h3 className="element__duration">1ч30мин</h3>
        </div>
      </li>
      <li className="element">
        <img
          className="element__image"
          src="https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg"
          alt="Movie card"
        />
        <div className="element__description">
          <h2 className="element__name">Cat is my pet</h2>
          <button className="element__save-button" aria-label="Cохранение понравившегося фильма" type="button"></button>
          <h3 className="element__duration">1ч30мин</h3>
        </div>
      </li>
      <li className="element">
        <img
          className="element__image"
          src="https://avatarko.ru/img/kartinka/19/zhivotnye_kot_18034.jpg"
          alt="Movie card"
        />
        <div className="element__description">
          <h2 className="element__name">Cat is my pet</h2>
          <button className="element__save-button" aria-label="Cохранение понравившегося фильма" type="button"></button>
          <h3 className="element__duration">1ч30мин</h3>
        </div>
      </li>
    </>
  );
}
export default MoviesCard;
