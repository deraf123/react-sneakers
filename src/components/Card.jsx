import React from "react";

const Card = () => {
  return (
    <div className='card'>
      <div>
        <img className='favorite' src='/img/svg/like.svg' alt='like' />
      </div>
      <img width={133} height={112} src='img/sneakers/2.jpg' alt='sneakers' />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <div>
          <button className='button'>
            <img width={11} height={11} src='img/svg/plus.svg' alt='plus' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
