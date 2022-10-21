import React from "react";
import s from "./Drawer.module.scss";
const Drawer = ({ isClose, items = [], onRemove }) => {
  return (
    <div className={s.overlay}>
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
          {items.length > 0 ? (
            <div className={s.items}>
              <div className={s.main}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className={`${s.cartItem} d-flex align-center mb-20`}
                  >
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
                      onClick={() => onRemove(item.id)}
                      src='/img/svg/btnClose.svg'
                      alt='btnClose'
                    />
                  </div>
                ))}
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
          ) : (
            <div
              className={`${s.cardEmpty} d-flex align-center justify-center flex-column flex`}
            >
              <img
                className='mb-20'
                width={120}
                height120
                src='/img/empty-cart.jpg'
                alt='empty-cart'
              />

              <h2>Корзина Пустая</h2>
              <p className='opacity-6'>
                Добавте хотяб одну пару кроссовок, чтобы сделать заказ.
              </p>
              <button className={s.greenButton} onClick={isClose}>
                <img
                  className={s.greenButtonArrow}
                  src='/img/svg/arrow.svg'
                  alt='Arrow-back'
                />
                Вернутся назад
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
