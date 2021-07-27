import { CDishList, CDishForm, CBasket } from ".";
import {Route, Switch, useHistory} from 'react-router-dom';
import CShopList from "./shopList";




const Main = () => {

    return(
        <main className="main">
            <Switch>
                <Route path = "/dishes-list/" component ={CDishList}/>
                <Route path = "/create-dish/" component ={CDishForm}/>
                <Route path = "/dishes-bask" component ={CBasket}/>
                <Route path = "/shop-list/" component ={CShopList}/>
                <Route path = "/" component ={DefaultMain} exact/>
            </Switch>
        </main>
    )
}

const DefaultMain = () => {
    const history = useHistory()
    return(
        <div className = "createDishForm paddingOver">
            <p>Привіт! Ласкаво просимо на сторінку ЩироСмакуй. Ми за те,
                щоб щиро ділитися рецептами та зручно складати списки продуктів
                для найщиріших страв. А в цьому допоможе наш сервіс. 
            </p>
            <p>
                Це найперша версія нашого сервісу. Ви можете додати свій смачнючій рецепт,
                обрати рецепт з тих, що вже є на сайті та скласти список продуктів автоматично.
            </p>
            <p>
                Це небагатий функціонал, та ми не збираємось на цьому зупинятись.
                Нумо щиро смакувати!
            </p>
            <div className = "flexRow flexWrap">
                <button onClick = {() => history.push("/dishes-list/")}>До щирих страв</button>
                <button onClick = {() => history.push("/create-dish/")}>Додати нову страву</button>
            </div>
        </div>
    )
}

export default Main;