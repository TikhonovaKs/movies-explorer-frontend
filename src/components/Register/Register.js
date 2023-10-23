import React from 'react';
import Authentication from '../Authentication/Authentication.js';
import '../Authentication/Authentication.css';
import ButtonSave from '../ButtonSave/ButtonSave.js';

function Register() {
  return (
    <Authentication
      authenticationName="register"
      authenticationTitle="Добро пожаловать!"
      buttonName="Зарегестрироваться"
      authenticationQuestion="Уже зарегистрированы?"
      authenticationLink="Войти"
    >
      <label className="authentication__label" for="input-name">
        name
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
        email
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
      <label className="authentication__label" for="input-password">
        password
      </label>
      <input
        id="input-password"
        type="password"
        name="password"
        className="authentication__input authentication__input_data_password"
        required
        minlength="2"
        maxlength="200"
      />
      <span id="input-password-error" className="error"></span>
      <h3 className="authentication__warning-text">Что-то пошло не так...</h3>
      <ButtonSave buttonName="Зарегистрироваться" />
    </Authentication>
  );
}
export default Register;
