import React, { useContext, useState } from "react";
import AppContext from "../../context";
import Info from "../Info/Info";
import s from "./Drawer.module.scss";
const Drawer = ({ isClose, items = [], onRemove }) => {
  const { setCartItems } = useContext(AppContext);
  const [orderComplete, setOrderComplete] = useState(false);

  const onClickOrdrer = () => {
    setOrderComplete(true);
    setCartItems([]);
  };

  return (
    <div className={s.overlay}>
      <div className={s.drawer}>
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
          <div className={s.main}>
            <div className={s.items}>
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
              <button className={s.greenButton} onClick={onClickOrdrer}>
                Оформить Заказ
                <img src='img/svg/arrow.svg' alt='arrow' />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={orderComplete ? "Заказ Оформлен!" : "Корзина Пустая"}
            description={
              orderComplete
                ? "Ваш заказ #18 скоро будет передан курьерской доставке"
                : "Добавте хотяб одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              orderComplete ? "/img/complete-order.png" : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
