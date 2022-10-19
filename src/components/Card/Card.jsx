import React from "react";
import s from "./Card.module.scss";
const Card = ({ name, price, img }) => {
  return (
    <div className={s.card}>
      <div>
        <img className={s.favorite} src='/img/svg/like.svg' alt='like' />
      </div>
      <img
        width={133}
        height={112}
        src={`img/sneakers/${img}.jpg`}
        alt='sneakers'
      />
      <h5>{name}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div>
          <button className='button'>
            <img width={11} height={11} src='img/svg/plus.svg' alt='plus' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
