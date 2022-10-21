import React, { useState } from "react";
import s from "./Card.module.scss";
const Card = ({
  name,
  price,
  img,
  id,
  onPlus,
  onFavorite,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const onClickPlus = () => {
    if (!isAdded) onPlus({ name, price, img, id });
    setIsAdded(!isAdded);
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ name, price, img, id });
  };
  return (
    <div className={s.card}>
      <div>
        <img
          className={s.favorite}
          src={isFavorite ? "img/svg/unLike.svg" : "img/svg/like.svg"}
          alt='like'
          onClick={() => onClickFavorite()}
        />
      </div>
      <img
        className='ml-15'
        width={133}
        height={112}
        src={img}
        alt='sneakers'
      />
      <h5>{name}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          onClick={onClickPlus}
          className={s.plus}
          width={32}
          height={32}
          src={isAdded ? "img/svg/btnCheked.svg" : "img/svg/btnPlus.svg"}
          alt='plus'
        />
      </div>
    </div>
  );
};

export default Card;
