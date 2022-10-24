import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorits, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isShowCart, setIsShowCart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get("https://63501d8278563c1d82b99cee.mockapi.io/cart"),
            axios.get("https://63501d8278563c1d82b99cee.mockapi.io/favorites"),
            axios.get("https://63501d8278563c1d82b99cee.mockapi.io/items"),
          ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("Ошибка при запросе данных");
        console.log(error);
      }
    }
    fetchData();
  }, []);
  //Добавление Карты Товара
  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://63501d8278563c1d82b99cee.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prevState) => [...prevState, obj]);
        const { data } = await axios.post(
          "https://63501d8278563c1d82b99cee.mockapi.io/cart",
          obj
        );
        setCartItems((prevState) =>
          prevState.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            } else return item;
          })
        );
      }
    } catch (error) {
      alert("Товар в корзину не добавлен ");
    }
  };
  //Удаление Карты Товара
  const onRemoveItem = (id) => {
    try {
      axios
        .delete(`https://63501d8278563c1d82b99cee.mockapi.io/cart/${id}`)
        .catch((error) => console.log("Fetch Error:", error));
      setCartItems((prevState) =>
        prevState.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      console.log(error);
      alert("Ошибка при удаении товара");
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
  //Изменение Input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorits,
        isItemAdded,
        onAddToFavorite,
        onAddToCart,
        setIsShowCart,
        setCartItems,
      }}
    >
      <div className='wrapper clear'>
        <Drawer
          isClose={() => setIsShowCart(false)}
          items={cartItems}
          onRemove={onRemoveItem}
          opened={isShowCart}
        />

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
          <Route path='/orders' element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
