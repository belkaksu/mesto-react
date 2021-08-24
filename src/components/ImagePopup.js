import React from 'react';

function ImagePopup() {
    return(
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
    )
}

export default ImagePopup