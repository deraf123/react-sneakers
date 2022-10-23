import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorits, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isShowCart, setIsShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://63501d8278563c1d82b99cee.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://63501d8278563c1d82b99cee.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://63501d8278563c1d82b99cee.mockapi.io/items"
      );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);
  //Добавление Карты Товара
  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
        axios.delete(
          `https://63501d8278563c1d82b99cee.mockapi.io/cart/${obj.id}`
        );
      } else {
        axios.post("https://63501d8278563c1d82b99cee.mockapi.io/cart", obj);
        setCartItems((prevState) => [...prevState, obj]);
      }
    } catch (error) {
      alert("Товар в корзину не добавлен ");
    }
  };
  //Добавление Фаворита
  const onAddToFavorite = async (obj) => {
    try {
      if (favorits.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://63501d8278563c1d82b99cee.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prevState) =>
          prevState.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://63501d8278563c1d82b99cee.mockapi.io/favorites",
          obj
        );
        setFavorites((prevState) => [...prevState, data]);
      }
    } catch (error) {
      alert("Не Удалось добавить в фавориты");
    }
  };

  const onRemoveItem = (id) => {
    axios
      .delete(`https://63501d8278563c1d82b99cee.mockapi.io/cart/${id}`)
      .catch((error) => console.log("Fetch Error:", error));
    setCartItems((prevState) => prevState.filter((item) => item.id !== id));
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorits,
        isItemAdded,
        onAddToFavorite,
        setIsShowCart,
        setCartItems,
      }}
    >
      <div className='wrapper clear'>
        {isShowCart && (
          <Drawer
            isClose={() => setIsShowCart(false)}
            items={cartItems}
            onRemove={onRemoveItem}
          />
        )}

        <Header isShowDrawer={() => setIsShowCart(true)} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                cartItems={cartItems}
                items={items}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
