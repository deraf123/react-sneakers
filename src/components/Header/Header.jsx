import React from "react";
import "./Header.module.scss";
const Header = ({ isShowDrawer }) => {
  return (
    <header className='d-flex justify-between align-center'>
      <div className='d-flex align-center'>
        <img width={40} height={40} src='/img/logo.png' alt='logo' />
        <div>
          <h3 className='text-uppercase'>REACT SNEAKERS</h3>
          <p className='opacity-5'>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img width={18} height={18} src='/img/svg/cart.svg' alt='cart' />
            <span onClick={isShowDrawer} className='cu-p'>
              1205 руб.
            </span>
          </li>
          <li>
            <img width={18} height={18} src='/img/svg/user.svg' alt='user' />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;