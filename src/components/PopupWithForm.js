import React from 'react';

function PopupWithForm(props) {


    return(
        <section className={`popup popup_${props.name}`}  >
        <div className="popup__main">
          <button
            className="popup__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
          ></button>
          <form
            className="popup__container"
            name={props.name}
            novalidate
          >
            <h2 className="popup__title">{props.title}</h2>
            {props.children}

            <button type="submit" className="popup__submit-button">
              {props.buttonText}
            </button>
          </form>
        </div>
      </section>
    )


}

export default PopupWithForm