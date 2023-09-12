import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Profile from '../Profile/Profile.js';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {
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
          path="/movies"
          element={
            <>
              <Header backgroundName="grey" />
              <Movies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <>
              <Header backgroundName="grey" />
              <SavedMovies />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <>
              <Register />
            </>
          }
        ></Route>
        <Route
          path="/signin"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Header backgroundName="grey" />
              <Profile />
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
