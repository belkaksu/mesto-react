import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setSelectedCard({ name: '', link: '' })
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
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm name="profile" title="Редактировать профиль" buttonText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        {editProfileChildren}
      </PopupWithForm>
      <PopupWithForm name="add-card" title="Новое место" buttonText="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        {AddPlaceChildren}
      </PopupWithForm>
      <PopupWithForm name="new-avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        {EditAvatarChildren}
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
