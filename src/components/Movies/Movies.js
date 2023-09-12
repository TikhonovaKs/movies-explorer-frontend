import React from 'react';
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies() {
  return (
    <div>
      <SearchForm />
      <MoviesCardList />
      <button className="elements__button-more" aria-label="Еще больше фильмов" type="button">
        Ещё
      </button>
    </div>
  );
}
export default Movies;
