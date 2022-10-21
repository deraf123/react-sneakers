import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className='search-block d-flex'>
          <img src='/img/svg/search.svg' alt='Search' />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className='clear cu-p'
              src='/img/svg/btnClose.svg'
              alt='clear'
            />
          )}

          <input
            onChange={onChangeSearchInput}
            type='text'
            placeholder='Поиск...'
            value={searchValue}
          />
        </div>
      </div>

      <div className='d-flex flex-wrap justify-between'>
        {items
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.id}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
