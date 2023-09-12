import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile__title">Hi, Kseniia!</h2>
      <div className="profile__info">
        <div className="profile__field">
          <h3 className="profile__field-name">name</h3>
          <h3 className="profile__name">Kseniia</h3>
        </div>
        <div className="profile__field">
          <h3 className="profile__field-name">email</h3>
          <h3 className="profile__email">my@email.com</h3>
        </div>
      </div>
      <button className="profile__button-edit" aria-label="Редактирование профиля" type="button">
        Редактировать
      </button>
      <button className="profile__button-signout" aria-label="Выйти из аккаунта" type="button">
        Выйти из аккаунта
      </button>
    </div>
  );
}
export default Profile;
