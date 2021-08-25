import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }

  const editProfileChildren = (
    <>
      <input
        type="text"
        id="user-name"
        className="popup__item popup__item_user_name"
        placeholder="ФИО или ник Пользователя"
        name="userName"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="user-name-error popup__item-error"></span>
      <input
        type="text"
        id="user-job"
        className="popup__item popup__item_user_job"
        placeholder="Род деятельности"
        name="userJob"
        required
        minLength="2"
        maxLength="200"
      />
      <span className="user-job-error popup__item-error"></span>
    </>
  )

  const AddPlaceChildren = (
    <>
      <input
        type="text"
        id="place-name"
        className="popup__item popup__item_data_name"
        placeholder="Название"
        required
        name="dataName"
        minLength="2"
        maxLength="30"
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
    </>

  )

  const EditAvatarChildren = (
    <>
      <input
        type="url"
        id="avatar-url"
        className="popup__item popup-new-avatar__link"
        placeholder="Ссылка на картинку"
        name="avatarLink"
        required
      />
      <span className="popup__item-error avatar-url-error"></span>
    </>
  )


  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} children={editProfileChildren} onClose={closeAllPopups} />
      <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} children={AddPlaceChildren} onClose={closeAllPopups} />
      <PopupWithForm name="new-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} children={EditAvatarChildren} onClose={closeAllPopups} />

      <ImagePopup />

      {/* <section className="popup popup-profile">
        <div className="popup__main">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container"
            name="popupForm"
            noValidate
          >
            <h2 className="popup__title">Редактировать профиль</h2>

            <input
              type="text"
              id="user-name"
              className="popup__item popup__item_user_name"
              placeholder="ФИО или ник Пользователя"
              name="userName"
              required
              minLength="2"
              maxLength="40"
            />
            <span className="user-name-error popup__item-error"></span>
            <input
              type="text"
              id="user-job"
              className="popup__item popup__item_user_job"
              placeholder="Род деятельности"
              name="userJob"
              required
              minLength="2"
              maxLength="200"
            />
            <span className="user-job-error popup__item-error"></span>

            <button type="submit" className="popup__submit-button">
              Сохранить
            </button>
          </form>
        </div>
      </section> */}

      {/* <section className="popup popup-add-card">
        <div className="popup__main">
          <button
            className="popup__close-button popup-add-card__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup-add-card__container"
            name="popupAddCardForm"
            noValidate
          >
            <h2 className="popup__title">Новое место</h2>

            <input
              type="text"
              id="place-name"
              className="popup__item popup__item_data_name"
              placeholder="Название"
              required
              name="dataName"
              minLength="2"
              maxLength="30"
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
      </section> */}

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
            noValidate
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

      {/* <section className="popup popup-new-avatar">
        <div className="popup__main popup-new-avatar__main">
          <button
            className="popup__close-button popup-new-avatar__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container popup-new-avatar__container"
            name="popupNewAvatar"
            noValidate
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
      </section> */}
    </div>
  );
}

export default App;
