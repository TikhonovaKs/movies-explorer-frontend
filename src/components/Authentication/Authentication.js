import React from 'react';
import './Authentication.css';
import Logo from '../Logo/Logo.js';

function Authentication({
  children,
  authenticationName,
  authenticationTitle,
  buttonName,
  authenticationQuestion,
  authenticationLink,
}) {
  return (
    <div className={`authentication authentication_type_${authenticationName}`}>
      <Logo position="center"/>
      <h2 className="authentication__title">{authenticationTitle}</h2>
      <form className="authentication__form" name="register" novalidate>
        {children}
        <button type="submit" className="authentication__button-save" aria-label="Отправить результат">
          <h3 className="authentication__button-title">{buttonName}</h3>
        </button>
        <div className="authentication__links">
          <a href="#" className="authentication__question">
            {authenticationQuestion}
          </a>
          <a href="#" className="authentication__link">
            {authenticationLink}
          </a>
        </div>
      </form>
    </div>
  );
}
export default Authentication;
