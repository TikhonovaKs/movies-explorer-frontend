import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import * as auth from '../../utils/auth';
import './App.css';
import Main from '../Main/Main.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import EditProfile from '../EditProfile/EditProfile';

import * as mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(localStorage.getItem('jwt') && true);
  const [userData, setUserData] = React.useState({});

  //  проверяем наличие токена в локальном хранилище:
  const checkToken = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((user) => {
          setUserData(user.data);
          setLoggedIn(true);
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });
    }
  };
  React.useEffect(() => {
    checkToken();
  }, []);

  // вызываем useNavigate() (переход на другие страницы):
  const navigate = useNavigate();

  // обрабатчик входа пользователя в систему (передаем в Login):
  const handleLogin = ({ email, password }, setError) => {
    // обращаемся к API для аутентификации пользователя:
    auth
      .login(email, password)
      // обрабатываем успешное выполнение промиса, получив данные из ответа API в data.
      .then((data) => {
        // Проверяем, есть ли у полученных данных токен (data.token).
        if (data.token) {
          // Если токен существует, сохраняем токен в локальном хранилище (ключ(jwt) - значение(data.token)):
          localStorage.setItem('jwt', data.token);
          mainApi.setJwt();
          setLoggedIn(true);
          // checkToken();
          navigate('/movies');
        }
      })
      .catch((err) => {
        console.log(err);
        setError('login.servererror', { message: 'Something went wrong with signing in... Try again' });
      });
  };

  function handleSignout() {
    localStorage.clear();
    setLoggedIn(false);
  }

  // Обработчик регистрации пользователя:
  const handleRegister = ({ name, email, password }) => {
    auth
      .register(name, email, password)
      .then((data) => {
        handleLogin({ email, password });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleUpdateUser({ email, name }) {
    const jwt = localStorage.getItem('jwt');
    auth
      .editProfileInfo({ email, name, jwt })
      .then((userResponse) => {
        setUserData(userResponse.user);
        navigate('/profile');
      })
      .catch((err) => console.log(err));
  }

  const [allMoviesFromPublicApi, setAllMoviesFromPublicApi] = React.useState([]);
  console.log(allMoviesFromPublicApi);

  //эффект обращения к API "beatfilm-movies" для получения всех фильмов:
  React.useEffect(() => {
    moviesApi
      .getAllMovies()
      .then((data) => {
        // call-back function
        setAllMoviesFromPublicApi(
          data.map((item) => {
            return {
              id: item.id,
              country: item.country,
              duration: item.duration,
              year: item.year,
              director: item.director,
              description: item.description,
              trailerLink: item.trailerLink,
              nameRU: item.nameRU,
              nameEN: item.nameEN,
              image: 'https://api.nomoreparties.co/' + item.image.url,
              thumbnail: 'https://api.nomoreparties.co/' + item.image.formats.thumbnail.url,
            };
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header backgroundName="green" />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route
          exact
          path="/movies"
          element={
            <ProtectedRoute
              isLoggedIn={loggedIn}
              element={
                <>
                  <Header backgroundName="grey" />
                  <Movies allMoviesFromPublicApi={allMoviesFromPublicApi} path="/movies" />
                  <Footer />
                </>
              }
            />
          }
        ></Route>
        <Route
          exact
          path="/saved-movies"
          element={
            <ProtectedRoute
              isLoggedIn={loggedIn}
              element={
                <>
                  <Header backgroundName="grey" />
                  <Movies />
                  <Footer />
                </>
              }
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Register handleRegister={handleRegister} />
            </>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <>
              <Login handleLogin={handleLogin} />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              isLoggedIn={loggedIn}
              element={
                <>
                  <Header backgroundName="grey" />
                  <Profile userData={userData} handleSignout={handleSignout} />
                </>
              }
            />
          }
        ></Route>
        <Route
          path="/edit-profile"
          element={
            <>
              <EditProfile onUpdateUser={handleUpdateUser} />
            </>
          }
        ></Route>
        <Route
          path="/error"
          element={
            <>
              <NotFoundPage />
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
