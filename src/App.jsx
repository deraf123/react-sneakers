import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import axios from "axios";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorits, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isShowCart, setIsShowCart] = useState(false);

  useEffect(() => {
    axios
      .get("https://63501d8278563c1d82b99cee.mockapi.io/items")
      .then((res) => setItems(res.data))
      .catch((error) => console.log("Fetch Error:", error));
    axios
      .get("https://63501d8278563c1d82b99cee.mockapi.io/cart")
      .then((res) => setCartItems(res.data))
      .catch((error) => console.log("Fetch Error:", error));
    axios
      .get("https://63501d8278563c1d82b99cee.mockapi.io/favorites")
      .then((res) => setFavorites(res.data))
      .catch((error) => console.log("Fetch Error:", error));
  }, []);

  const onAddToCart = (obj) => {
    axios
      .post("https://63501d8278563c1d82b99cee.mockapi.io/cart", obj)
      .catch((error) => console.log("Fetch Error:", error));
    setCartItems((prevState) => [...prevState, obj]);
  };
  const onAddToFavorite = (obj) => {
    console.log(obj);
    if (favorits.find((favObj) => favObj.id === obj.id)) {
      axios
        .delete(
          `https://63501d8278563c1d82b99cee.mockapi.io/favorites/${obj.id}`
        )
        .catch((error) => console.log("Fetch Error:", error));
      setFavorites((prevState) =>
        prevState.filter((item) => item.id !== obj.id)
      );
    } else {
      axios
        .post("https://63501d8278563c1d82b99cee.mockapi.io/favorites", obj)
        .catch((error) => console.log("Fetch Error:", error));
      setFavorites((prevState) => [...prevState, obj]);
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
  return (
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
              items={items}
              searchValue={searchValue}
              onChangeSearchInput={onChangeSearchInput}
              setSearchValue={setSearchValue}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        ></Route>
        <Route
          path='/favorites'
          element={
            <Favorites items={favorits} onAddToFavorite={onAddToFavorite} />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
