import React from "react";
import s from "./Drawer.module.scss";
const Drawer = () => {
  return (
    <div style={{ display: "none" }} className={s.overlay}>
      <div className={s.drawer}>
        <div>
          <h2 className='mb-30'>
            Корзина
            <img
              className={s.removeBtn}
              src='/img/svg/btnClose.svg'
              alt='btnClose'
            />
          </h2>
          <div className={s.items}>
            <div className={`${s.cartItem} d-flex align-center mb-20`}>
              <div
                style={{ backgroundImage: "url(img/sneakers/3.jpg)" }}
                className={s.cartItemImage}
              ></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className={s.removeBtn}
                src='/img/svg/btnClose.svg'
                alt='btnClose'
              />
            </div>
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
