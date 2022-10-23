import React, { useContext } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Favorites = () => {
  const { favorits, onAddToFavorite } = useContext(AppContext);
  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Мои Закладки</h1>
      </div>

      <div className='d-flex flex-wrap justify-between'>
        {favorits.map((item) => (
          <Card
            key={item.id}
            favorited={true}
            onFavorite={onAddToFavorite}
            added
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
