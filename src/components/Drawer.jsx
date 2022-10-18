import React from "react";

const Drawer = () => {
  return (
    <div style={{ display: "none" }} className='overlay'>
      <div className='drawer'>
        <div>
          <h2 className='mb-30'>
            Корзина
            <img
              className='removeBtn'
              src='/img/svg/btnClose.svg'
              alt='btnClose'
            />
          </h2>
          <div className='items'>
            <div className='cartItem d-flex align-center mb-20'>
              <div
                style={{ backgroundImage: "url(img/sneakers/3.jpg)" }}
                className='cartItemImage'
              ></div>
              <div className='mr-20 flex'>
                <p className='mb-5'>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className='removeBtn'
                src='/img/svg/btnClose.svg'
                alt='btnClose'
              />
            </div>
          </div>
        </div>
        <div className='CartTotalBlock'>
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
          <button className='greenButton'>
            Оформить Заказ
            <img src='img/svg/arrow.svg' alt='arrow' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
