import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox.js';

function SearchForm() {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" className="search__input" placeholder="Фильм" />
        <button className="search__button">Найти</button>
      </div>
      <FilterCheckbox />
    </div>
  );
}
export default SearchForm;
