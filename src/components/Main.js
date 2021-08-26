import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {

   const [userName, setUserName] = React.useState('name');
   const [userDescription, setUserDescription] = React.useState('job');
   const [userAvatar, setUserAvatar] = React.useState('avatar');
   const [cards, setCards] = React.useState([]);
   const [userId, setUserId] = React.useState('');

      React.useEffect(() => {
        api.getUserInfo()
        .then((userData) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar)
            setUserId(userData._id)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
        .then((cardData) => {
            setCards(cardData)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    // Promise.all([api.getUserInfo(), api.getInitialCards()])
    // .then(([userData, cardData]) => {
  
    //   userInfo.setUserInfo(userData.name, userData.about)
    //   userInfo.setUserAvatar(userData.avatar)
    //   userId = userData._id;
    //   cardsContainer.renderItems(cardData.reverse());
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    return(
        <main className="content">
        <section className="profile content__profile">
          <div className="profile__avatar-button" onClick={props.onEditAvatar}>
            <img src={userAvatar} style={{ backgroundImage: `url(${userAvatar})` }} className="profile__avatar" alt="Аватарка пользователя" />
          </div>

          <div className="profile__main">
            <div className="profile__info">
              <div className="profile__client-info">
                <h1 className="profile__title">{userName}</h1>
                <p className="profile__subtitle">{userDescription}</p>
              </div>

              <button
                className="profile__edit-button"
                onClick={props.onEditProfile}
                type="button"
                aria-label="Изменить информацию о пользователе"
              ></button>
            </div>

            <button
              className="profile__add-button"
              onClick={props.onAddPlace}
              type="button"
              aria-label="добавить новое фото"
            ></button>
          </div>
        </section>
        <section className="cards">
          <ul className="cards__items">
              {cards.map((card, i) => (
                <Card card={card} userId={userId} key={card._id} onCardClick={props.onCardClick}/>  
                
              ))}
              </ul>
        </section>
      </main>
    )
}

export default Main
