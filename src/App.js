
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Main, Header, Footer} from "./components";
import {createBrowserHistory} from "history";
import {Provider} from 'react-redux';
import {store} from "./redux";


function App() {

  return (
    <Provider store={store}>
      <Router history = {createBrowserHistory}>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
