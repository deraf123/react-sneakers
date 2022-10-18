import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

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
          <Card />
          <div className='card'>
            <img
              width={133}
              height={112}
              src='img/sneakers/1.jpg'
              alt='sneakers'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className='button'>
                  <img
                    width={11}
                    height={11}
                    src='img/svg/plus.svg'
                    alt='plus'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='card'>
            <img
              width={133}
              height={112}
              src='img/sneakers/3.jpg'
              alt='sneakers'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className='button'>
                  <img
                    width={11}
                    height={11}
                    src='img/svg/plus.svg'
                    alt='plus'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='card'>
            <img
              width={133}
              height={112}
              src='img/sneakers/4.jpg'
              alt='sneakers'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <div>
                <button className='button'>
                  <img
                    width={11}
                    height={11}
                    src='img/svg/plus.svg'
                    alt='plus'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
