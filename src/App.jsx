import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    fetch("https://63501d8278563c1d82b99cee.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setItems(data);
      })
      .catch(function (error) {
        console.log("Fetch Error:", error);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prevState) => [...prevState, obj]);
  };
  console.log(cartItems);
  return (
    <div className='wrapper clear'>
      {isShowCart && (
        <Drawer isClose={() => setIsShowCart(false)} items={cartItems} />
      )}

      <Header isShowDrawer={() => setIsShowCart(true)} />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/svg/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex flex-wrap justify-between'>
          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              img={item.img}
              onClickFavorite={() => console.log("chlen")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
