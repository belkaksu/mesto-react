import React from 'react';

function Main(props) {

   


    return(
        <main className="content">
        <section className="profile content__profile">
          <div className="profile__avatar-button" onClick={props.onEditAvatar}>
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
          <ul className="cards__items"></ul>
        </section>
      </main>
    )
}

export default Main
