import React from 'react';
import './Authentication.css';
import Logo from '../Logo/Logo.js';
// import ButtonSave from '../ButtonSave/ButtonSave';

function Authentication({
  children,
  authenticationName,
  authenticationTitle,
  authenticationQuestion,
  authenticationLink,
}) {
  return (
    <div className={`authentication authentication_type_${authenticationName}`}>
      <Logo position="center" />
      <h2 className="authentication__title">{authenticationTitle}</h2>
      <form className="authentication__form" name="register" novalidate>
        {children}
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
