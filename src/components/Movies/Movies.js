import React from 'react';
import * as mainApi from '../../utils/MainApi';
import './Movies.css';
import '../SearchForm/SearchForm.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';

function Movies({ allMoviesFromPublicApi, path }) {
  const initValueOfMoviesList = JSON.parse(localStorage.getItem('latestFilteredMovies'));
  const [originMovies, setOriginMovies] = React.useState([]);
  const [savedOriginMovies, setSavedOriginMovies] = React.useState([]);
  const [moviesList, setMoviesList] = React.useState(initValueOfMoviesList ?? []); // ?? - проверяем на null
  // стейт для хранения сохраненных фильмов:
  const [savedMoviesList, setSavedMoviesList] = React.useState([]);

  //эффект обращения к mainApi за сохраненными фильмами:
  React.useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((data) => {
        data.movie.forEach((item) => {
          item.isActive = true;
          const foundMovie = moviesList.find((movie) => movie.id === item.id);
          if (foundMovie) {
            const updMoviesList = moviesList.map((p) => {
              if (p.id === foundMovie.id) {
                p.isActive = true;
                p._id = item._id;
              }
              return p;
            });
            setMoviesList(updMoviesList);
          }
        });
        setSavedMoviesList(data.movie);
        setSavedOriginMovies(data.movie.map((p) => p));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (keyword, setError) => {
    if (path === '/movies') {
      const resultMovies = allMoviesFromPublicApi.filter((movie) =>
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase())
      );
      resultMovies.forEach((item) => {
        const foundMovie = savedOriginMovies.find((movie) => movie.id === item.id);
        if (foundMovie) {
          if (item.id === foundMovie.id) {
            item.isActive = true;
            item._id = foundMovie._id;
          }
        }
      });
      setMoviesList(resultMovies);

      // Сохранить полученные фильмы в локал хранилище (только для поисковых фильмов)
      localStorage.setItem('latestFilteredMovies', JSON.stringify(resultMovies));
    } else {
      const resultMovies = keyword
        ? savedMoviesList.filter((movie) => movie.nameRU.toLowerCase().includes(keyword.toLowerCase()))
        : originMovies;
      setSavedMoviesList(resultMovies);
    }
  };

  const handleShortMovies = (isActive) => {
    if (isActive) {
      setOriginMovies(moviesList.map((p) => p));
      const filteredMovies = moviesList.filter((item) => item.duration < 40);
      setMoviesList(filteredMovies);

      const filteredSavedMovies = savedMoviesList.filter((item) => item.duration < 40);
      setSavedMoviesList(filteredSavedMovies);
    } else {
      setMoviesList(originMovies);
      setSavedMoviesList(savedOriginMovies);
    }
  };

  const handleSaveMovies = (data, isActive) => {
    if (isActive) {
      const isMovieSaved = savedMoviesList.find((movie) => movie.id === data.id) !== undefined;
      if (isMovieSaved) {
        return;
      }
      mainApi.saveMovie({ ...data }).then(({ movie }) => {
        const newMovieItem = {
          id: movie.id,
          country: movie.country,
          duration: movie.duration,
          year: movie.year,
          director: movie.director,
          description: movie.description,
          image: movie.image,
          trailerLink: movie.trailerLink,
          thumbnail: movie.thumbnail,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          __v: movie.__v,
          _id: movie._id,
          isActive: true,
        };
        setSavedMoviesList([newMovieItem, ...savedMoviesList]);
        const foundMovie = moviesList.find((mv) => mv.id === movie.id);
        if (foundMovie) {
          const updMoviesList = moviesList.map((p) => {
            if (p.id === foundMovie.id) {
              p.isActive = true;
              p._id = movie._id;
            }
            return p;
          });
          setMoviesList(updMoviesList);
        }
      });
    }
    if (!isActive) {
      mainApi
        .deleteMovie(data._id)
        .then((data) => {
          const updatedMoviesList = savedMoviesList.filter((movie) => movie.id !== data.movie.id);
          setSavedMoviesList(updatedMoviesList);
          const foundMovie = moviesList.find((mv) => mv.id === data.movie.id);
          if (foundMovie) {
            const updMoviesList = moviesList.map((p) => {
              if (p.id === foundMovie.id) {
                p.isActive = false;
              }
              return p;
            });
            setMoviesList(updMoviesList);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="movies">
      <SearchForm handleSearch={handleSearch} handleShortMovies={handleShortMovies} />
      <MoviesCardList
        moviesList={moviesList}
        path={path}
        handleSaveMovies={handleSaveMovies}
        savedMoviesList={savedMoviesList}
      />
    </div>
  );
}

export default Movies;
