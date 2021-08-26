import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
      }  


    return(
        <li className="element">
        <img
          className="element__image"
          alt="Фото"
          src={props.card.link}
            onClick={handleClick}
        />
        <button
          className={`element__delete-button ${props.card.owner._id === props.userId ? "element__delete-button_display-active" : "element__delete-button"}`}
          type="button"
          aria-label="Удалить карточку"
          onClick={props.isOpen}

        ></button>
        <div className="element__desc">
          <h2 className="element__title">{props.card.name}</h2>
          <div className="element__like-container">
            <button
              className="element__icon"
              type="button"
              aria-label="Поставить лайк"
            ></button>
            <p className="element__counter">{props.card.likes.length}</p>
          </div>
        </div>
      </li>
    )
}

export default Card
