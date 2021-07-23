import {createStore, combineReducers, applyMiddleware} from 'redux';
import {goodsCreator, goodAdd} from "./goodsCreator";
import {SagaMiddleware, rootSaga} from "../saga";
import {dishesGetter, actionGetDishes, actionPutDishes} from "./dishesGetter";
import {dishesBasket, dishAdd, dishDelete, clearDishes} from "./dishesBasket";






const store = createStore(combineReducers({
    promiseData: dishesGetter,
    dishesBask: dishesBasket,
    newGoods: goodsCreator, 
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, goodAdd, dishesGetter, actionGetDishes, actionPutDishes, dishesBasket, dishAdd, dishDelete, clearDishes};

