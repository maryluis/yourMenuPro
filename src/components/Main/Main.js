import {Route, Switch, useHistory} from 'react-router-dom';
import { MessageForm, CShopListPage, CDishList, CDishForm, CBasket, CFastListPage } from "../";





const Main = () => {

    return(
        <main className="main">
            <Switch>
                <Route path = "/dishes-list/" component ={CDishList}/>
                <Route path = "/create-dish/" component ={CDishForm}/>
                <Route path = "/dishes-bask" component ={CBasket}/>
                <Route path = "/shop-list/" component ={CShopListPage}/>
                <Route path = "/fast-list/" component ={CFastListPage}/>
                <Route path = "/create-message/" component ={MessageForm}/>
                <Route path = "/success/" component ={Success}/>               
                <Route path = "/" component ={DefaultMain} exact/>
                <Route component = { NotFound } exact/>
            </Switch>
        </main>
    )
}


const NotFound = () => {
    const history = useHistory()
    return(
        <div className = "createDishForm paddingOver marginTop">
            <p>Ой, здається ви щось заблукали. Спробуйте іншу сторінку.</p>
            <button onClick={() => history.push("/")}>На головну</button>
        </div>
    )
}


const Success = () => {
    const history = useHistory()
    return(
        <div className = "createDishForm paddingOver marginTop">
            <p>Дякуємо за відгук</p>
            <button onClick={() => history.push("/")}>На головну</button>
        </div>
    )
}

const DefaultMain = () => {
    const history = useHistory()
    return(
        <div className = "createDishForm paddingOver marginTop">
            <p>Привіт! Ласкаво просимо на сторінку ЩироСмакуй. Ми за те,
                щоб щиро ділитися рецептами та зручно складати списки продуктів
                для найщиріших страв. А в цьому допоможе наш сервіс. 
            </p>
            <p>
                Це друга версія нашого сервісу. 
                Тепер, якщо ви не уявляєте що приготувати, 
                можете обрати кількіть блюд, а ми вам запропонуємо страви на вибір, та підготуємо список, на випадок, 
                якщо всі страви вам сподобаються.
            </p>
            <p>Також ми додали сортування страв за їх типом - перша страва, друга, десерт та ін.
                Окрім того трошки змінили зовнішній вигляд для мобільних пристроЇв та
                додали форму зворотнього зв'язку для ваших побажань та зауважень.
            </p>
            <p>
                Нумо щиро смакувати!
            </p>
            <div className = "flexRow flexWrap">
                <button onClick = {() => history.push("/dishes-list/")}>До щирих страв</button>
                <button onClick = {() => history.push("/create-dish/")}>Додати нову страву</button>
                <button onClick = {() => history.push("/create-message/")}>Додати відгук</button>
            </div>
        </div>
    )
}

export {Main, NotFound};