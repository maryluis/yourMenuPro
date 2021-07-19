
import './App.css';
import {CDishList, Header, Footer} from "./components";
import {Provider} from 'react-redux';
import {store} from "./redux";


function App() {

  return (
    <Provider store={store}>
      <Header/>
      <main className="main">
        <CDishList/>
      </main>
      <Footer/>
    </Provider>
    // <>
    // <OneDish tittle = "Борщ" goodsArr = {
    //   [new inredients("Капуста", 1, "шт", 1),
    //   new inredients("Мясо_говядины", 700, "гр", 2),
    //   new inredients("Буряк", 1, "шт", 1),
    //   new inredients("Морковь", 1, "шт", 1),
    //   new inredients("Чеснок", 5, "зубчиков", 1),
    //   new inredients("Лук", 2, "шт", 1),
    //   new inredients("Картошка", 4, "шт", 1),
    //   new inredients("Томатная_паста", 1, "шт", 7),
    //   new inredients("Сметана", 300, "гр", 3)]
    // }></OneDish>
    // </>
  );
}

export default App;
