import React, { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
import s from "./Card.module.scss";
const Card = ({
  name,
  price,
  img,
  id,
  onPlus,
  onFavorite,
  favorited = false,
  added = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const onClickPlus = () => {
    onPlus({ name, price, img, id });
  };
  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite({ name, price, img, id });
  };
  return (
    <div className={s.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={265}
          viewBox='0 0 165 265'
          backgroundColor='#f3f3f3'
          foregroundColor='#ecebeb'
        >
          <rect x='1' y='0' rx='10' ry='10' width='165' height='155' />
          <rect x='0' y='167' rx='5' ry='5' width='165' height='15' />
          <rect x='0' y='187' rx='5' ry='5' width='100' height='15' />
          <rect x='1' y='234' rx='5' ry='5' width='80' height='25' />
          <rect x='118' y='230' rx='10' ry='10' width='32' height='32' />
        </ContentLoader>
      ) : (
        <>
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
              src={
                isItemAdded(id)
                  ? "img/svg/btnCheked.svg"
                  : "img/svg/btnPlus.svg"
              }
              alt='plus'
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
