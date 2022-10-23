import axios from "axios";
import React, { useState } from "react";
import { useCart } from "../../hooks/useCart";

import Info from "../Info/Info";
import s from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ isClose, items = [], onRemove }) => {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://63501d8278563c1d82b99cee.mockapi.io/order",
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://63501d8278563c1d82b99cee.mockapi.io/cart/${item.id}`
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
    }
    setIsLoading(false);
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
                  <b>{totalPrice} руб.</b>
                </li>
                <li>
                  <span>Налог 5%</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                className={s.greenButton}
                onClick={onClickOrder}
              >
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
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
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
