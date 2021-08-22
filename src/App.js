import React from 'react';
import logo from './logo.svg';


function App() {
  return (
    <div className="page">
      <header className="header page__header">
        <img
          src="<%=require('./images/header__logo.svg')%>"
          alt="Логотип сервиса Mesto"
          className="logo header__logo"
        />
      </header>c
      <main className="content">
        <section className="profile content__profile">
          <div className="profile__avatar-button">
            <img src="#" className="profile__avatar" alt="Аватарка пользователя" />
          </div>

          <div className="profile__main">
            <div className="profile__info">
              <div className="profile__client-info">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <p className="profile__subtitle">Исследователь океана</p>
              </div>

              <button
                className="profile__edit-button"
                type="button"
                aria-label="Изменить информацию о пользователе"
              ></button>
            </div>

            <button
              className="profile__add-button"
              type="button"
              aria-label="добавить новое фото"
            ></button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__items"></ul>
        </section>
      </main>
      <footer className="footer page__footer">
        <p className="footer__desc">&#169; 2020 Mesto Russia</p>
      </footer>

      <section className="popup popup-profile">
        <div className="popup__main">
          <button
            className="popup__close-button popup-profile__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup__container_profile_data"
            name="popupForm"
            novalidate
          >
            <h2 className="popup__title">Редактировать профиль</h2>

            <input
              type="text"
              id="user-name"
              className="popup__item popup__item_user_name"
              placeholder="ФИО или ник Пользователя"
              name="userName"
              required
              minlength="2"
              maxlength="40"
            />
            <span className="user-name-error popup__item-error"></span>
            <input
              type="text"
              id="user-job"
              className="popup__item popup__item_user_job"
              placeholder="Род деятельности"
              name="userJob"
              required
              minlength="2"
              maxlength="200"
            />
            <span className="user-job-error popup__item-error"></span>

            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup-add-card">
        <div className="popup__main">
          <button
            className="popup__close-button popup-add-card__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup-add-card__container"
            name="popupAddCardForm"
            novalidate
          >
            <h2 className="popup__title">Новое место</h2>

            <input
              type="text"
              id="place-name"
              className="popup__item popup__item_data_name"
              placeholder="Название"
              required
              name="dataName"
              minlength="2"
              maxlength="30"
            />
            <span className="place-name-error popup__item-error"></span>
            <input
              type="url"
              id="place-url"
              className="popup__item popup__item_data_link"
              placeholder="Ссылка на картинку"
              name="dataLink"
              required
            />
            <span className="place-url-error popup__item-error"></span>
            <button type="submit" className="popup__submit-button">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup-image">
        <div className="popup-image__main">
          <button
            className="popup__close-button popup-image__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <figure className="popup-image__container">
            <img
              className="popup-image__picture"
              src="https://imgholder.ru/323x300/9dbf16/fff&text=image"
              alt="Фото"
            />
            <figcaption className="popup-image__subtitle"></figcaption>
          </figure>
        </div>
      </section>

      <section className="popup popup-card-delete">
        <div className="popup__main popup-card-delete__main">
          <button
            className="popup__close-button popup-card-delete__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup-card-delete__container"
            name="popupCardDelete"
            novalidate
          >
            <h2 className="popup__title popup-card-delete__title">Вы уверены?</h2>
            <button
              type="submit"
              className="popup__submit-button popup-card-delete__submit-button"
            >
              Да
            </button>
          </form>
        </div>
      </section>

      <section className="popup popup-new-avatar">
        <div className="popup__main popup-new-avatar__main">
          <button
            className="popup__close-button popup-new-avatar__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup-new-avatar__container"
            name="popupNewAvatar"
            novalidate
          >
            <h2 className="popup__title popup-new-avatar__title">
              Обновить аватар
            </h2>

            <input
              type="url"
              id="avatar-url"
              className="popup__item popup-new-avatar__link"
              placeholder="Ссылка на картинку"
              name="avatarLink"
              required
            />
            <span className="popup__item-error avatar-url-error"></span>
            <button
              type="submit"
              className="popup__submit-button popup-new-avatar__submit-button"
            >
              Сохранить
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
