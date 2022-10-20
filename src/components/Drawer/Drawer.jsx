import React from "react";
import s from "./Drawer.module.scss";
const Drawer = ({ isClose, items = [] }) => {
  return (
    <div className={s.overlay} onClick={isClose}>
      <div className={s.drawer}>
        <div>
          <h2 className='mb-30'>
            Корзина
            <img
              onClick={isClose}
              className={s.removeBtn}
              src='/img/svg/btnClose.svg'
              alt='btnClose'
            />
          </h2>
          <div className={s.items}>
            {items.map((item) => (
              <div className={`${s.cartItem} d-flex align-center mb-20`}>
                <div
                  style={{ backgroundImage: `url(${item.img})` }}
                  className={s.cartItemImage}
                ></div>
                <div className='mr-20 flex'>
                  <p className='mb-5'>{item.name}</p>
                  <b>{item.price}руб.</b>
                </div>
                <img
                  className={s.removeBtn}
                  src='/img/svg/btnClose.svg'
                  alt='btnClose'
                />
              </div>
            ))}
          </div>
        </div>
        <div className={s.CartTotalBlock}>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className={s.greenButton}>
            Оформить Заказ
            <img src='img/svg/arrow.svg' alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
