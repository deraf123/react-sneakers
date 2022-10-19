import Card from "./components/Card/Card";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999",
    img: "1",
  },
  { name: "Мужские Кроссовки Nike Air Max 270", price: "12 999", img: "2" },
  { name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 499", img: "3" },
  { name: "Кроссовки Puma X Aka Boku Future Rider", price: "8 999", img: "4" },
];

function App() {
  return (
    <div className='wrapper clear'>
      <Drawer />
      <Header />
      <div className='content p-40'>
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/svg/search.svg' alt='Search' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>

        <div className='d-flex'>
          {arr.map((item) => (
            <Card name={item.name} price={item.price} img={item.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
