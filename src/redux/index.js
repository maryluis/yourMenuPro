import {createStore, combineReducers, applyMiddleware} from 'redux';
import {goodsCreator, goodAdd, asyncGoodAdd} from "./goodsCreator";
import {SagaMiddleware, rootSaga} from "../saga";
import {dishesGetter, actionGetDishes, actionPutDishes} from "./dishesGetter";
import {dishesBasket, asyncDishAdd, dishAdd, asyncDishDelete, dishDelete, asyncClearDishes, clearDishes} from "./dishesBasket";
import {dishesListReducer, actionPutStandartList, actionStandartList} from "./dishesList";





const store = createStore(combineReducers({
    promiseData: dishesGetter,
    dishesBask: dishesBasket,
    newGoods: goodsCreator, 
    shopList: dishesListReducer,
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, asyncGoodAdd, goodAdd, asyncDishDelete, asyncClearDishes, dishesGetter, actionGetDishes, actionPutDishes, dishesBasket, dishAdd, asyncDishAdd, dishDelete, clearDishes, dishesListReducer, actionPutStandartList, actionStandartList};

