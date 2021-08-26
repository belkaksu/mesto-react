import React from 'react';

function ImagePopup(props) {
    return(
        <section className={`popup popup-image ${props.card.name !== '' ? 'popup_display_opened' : 'popup'}`}>
        <div className="popup-image__main">
          <button
            className="popup__close-button popup-image__close-button"
            type="button"
            aria-label="Кнопка закрытия попапа"
            onClick={props.onClose}
          ></button>
          <figure className="popup-image__container">
            <img
              className="popup-image__picture"
              src={props.card.link}
              alt={props.card.name}
              
            />
            <figcaption className="popup-image__subtitle">{props.card.name}</figcaption>
          </figure>
        </div>
      </section>
    )
}

export default ImagePopup