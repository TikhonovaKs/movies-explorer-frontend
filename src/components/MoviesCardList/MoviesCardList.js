import React from 'react';
import useResize from '../../utils/hooks/useResize';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard.js';

function MoviesCardList({ moviesList, savedMoviesList, path, handleSaveMovies }) {
  const { isScreenXl, isScreenMd, isScreenSm } = useResize();

  // Отображение нужного кол.ва карточек в зависимости отразмера экрана
  const visibleMoviesMap = {
    isScreenXl: 16,
    isScreenMd: 8,
    isScreenSm: 5,
  };
  const [visibleMoviesFromList, setVisibleMoviesFromList] = React.useState(
    visibleMoviesMap[isScreenXl ? 'isScreenXl' : isScreenMd ? 'isScreenMd' : 'isScreenSm']
  );

  const showMoreMovies = () => {
    if (isScreenXl) {
      setVisibleMoviesFromList((prevValue) => prevValue + 16);
    } else if (isScreenMd) {
      setVisibleMoviesFromList((prevValue) => prevValue + 8);
    } else if (isScreenSm) {
      setVisibleMoviesFromList((prevValue) => prevValue + 5);
    } else {
      setVisibleMoviesFromList((prevValue) => prevValue + 16);
    }
  };
  

  const cards =
    path === '/movies'
      ? moviesList
          .slice(0, visibleMoviesFromList)
          .map((movie) => <MoviesCard movie={movie} handleSaveMovies={handleSaveMovies} />)
      : savedMoviesList
          .slice(0, visibleMoviesFromList)
          .map((movie) => <MoviesCard movie={movie} handleSaveMovies={handleSaveMovies} />);

  // ...убираем видимость кнопки Еще
  const isButtonHidden = visibleMoviesFromList >= moviesList.length;

  // Если еще ни разу не искались фильмы
  if (moviesList.length === 0) {
    return <p className="elements__error">Начните поиск фильмов</p>;
  }

  return (
    <div>
      <ul className="elements">{cards}</ul>
      <button
        className={`elements__button-more ${isButtonHidden ? 'elements__button-more-hidden' : ''}`}
        aria-label="Еще больше фильмов"
        type="button"
        onClick={showMoreMovies}
      >
        Еще
      </button>
    </div>
  );
}

export default MoviesCardList;
