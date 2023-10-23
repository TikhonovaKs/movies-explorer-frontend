import React from 'react';
import Authentication from '../Authentication/Authentication.js';
import '../Authentication/Authentication.css';
import ButtonSave from '../ButtonSave/ButtonSave.js';

function Login() {
  return (
    <Authentication
      authenticationName="login"
      authenticationTitle="Рады видеть!"
      buttonName="Войти"
      authenticationQuestion="Ещё не зарегистрированы?"
      authenticationLink="Регистрация"
    >
      <label className="authentication__label" for="input-name">
        E-mail
      </label>
      <input
        id="input-name"
        type="text"
        name="name"
        className="authentication__input authentication__input_data_name"
        required
        minlength="2"
        maxlength="40"
      />
      <span id="input-name-error" className="error"></span>
      <label className="authentication__label" for="input-email">
        Password
      </label>
      <input
        id="input-email"
        type="text"
        name="email"
        className="authentication__input authentication__input_data_email"
        required
        minlength="2"
        maxlength="200"
      />
      <span id="input-email-error" className="error"></span>
      <ButtonSave position="further" buttonName="Войти" />
    </Authentication>
  );
}
export default Login;
