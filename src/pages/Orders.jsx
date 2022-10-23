import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import AppContext from "../context";

const Orders = () => {
  const { onAddToCart, onAddToFavorite } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://63501d8278563c1d82b99cee.mockapi.io/order"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе Заказов");
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className='content p-40'>
      <div className='d-flex align-center justify-between mb-40'>
        <h1>Мои Заказы</h1>
      </div>

      <div className='d-flex flex-wrap justify-between'>
        {(isLoading ? [...Array(4)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
