import React from "react";
import Card from "../components/Card/Card";

const Home = ({
  items,
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) => {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        onPlus={(obj) => onAddToCart(obj)}
        onFavorite={(obj) => onAddToFavorite(obj)}
        loading={isLoading}
        {...item}
      />
    ));
  };
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

      <div className='d-flex flex-wrap justify-between'>{renderItems()}</div>
    </div>
  );
};

export default Home;
