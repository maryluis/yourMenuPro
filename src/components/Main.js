import { CDishList, CDishForm } from ".";
import {Route, Switch} from 'react-router-dom';



const Main = () => {

    return(
        <main className="main">
            <Switch>
                <Route path = "/dishes-list/" component ={CDishList}/>
                <Route path = "/create-dish/" component ={CDishForm}/>
                <Route path = "/" component ={DefaultMain} exact/>
            </Switch>
        </main>
    )
}

const DefaultMain = () => {

    return(
        <div className = "createDishForm">
            gisdo[unnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
            esrlksjglkrjegjreoigjoierrj[oivjeo[ojtijtiojotjeotjiov 
            ar'jveosrgovesrgoerognboergniowegionetnweiontiowenronv 
            l;regno;vergovewerotivwerotjwveortjvweiotp]]]
        </div>
    )
}

export default Main;