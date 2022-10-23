import React, { useContext } from "react";
import AppContext from "../../context";
import s from "../Drawer/Drawer.module.scss";

const Info = ({ title, image, description }) => {
  const { setIsShowCart } = useContext(AppContext);
  return (
    <div className='d-flex flex'>
      <div
        className={`${s.cardEmpty} d-flex align-center justify-center flex-column flex`}
      >
        <img
          className='mb-20'
          width={120}
          height120
          src={image}
          alt='empty-cart'
        />

        <h2>{title}</h2>
        <p className='opacity-6'>{description}</p>
        <button className={s.greenButton} onClick={() => setIsShowCart(false)}>
          <img
            className={s.greenButtonArrow}
            src='/img/svg/arrow.svg'
            alt='Arrow-back'
          />
          Вернутся назад
        </button>
      </div>
    </div>
  );
};

export default Info;
