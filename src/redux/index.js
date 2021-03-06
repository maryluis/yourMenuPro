import {createStore, combineReducers, applyMiddleware} from 'redux';
import {goodsCreator, goodAdd, asyncGoodAdd} from "./goodsCreator";
import {SagaMiddleware, rootSaga} from "../saga";
import {dishesGetter, actionGetDishes, actionPutDishes} from "./dishesGetter";
import {dishesBasket, asyncDishAdd, dishAdd, asyncDishDelete, dishDelete, asyncClearDishes, clearDishes} from "./dishesBasket";
import {dishesListReducer, actionPutStandartList, actionStandartList, actionFastList, actionPutFastList} from "./dishesList";
import {fastCountDish, asyncChangeCount, changeCount} from "./fastCountDish";
import {dishesFastList, asyncFastDish, fastDish} from "./fastDishList";
import { dishesTypes } from './typeReducer';



const store = createStore(combineReducers({
    promiseData: dishesGetter,
    dishesBask: dishesBasket,
    newGoods: goodsCreator, 
    shopList: dishesListReducer,
    countFastList: fastCountDish,
    fastDishList: dishesFastList,
    typesOfDish: dishesTypes,
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, fastCountDish, actionFastList, actionPutFastList,
    asyncChangeCount, changeCount, asyncGoodAdd, goodAdd, asyncDishDelete,
     asyncClearDishes, dishesGetter, actionGetDishes, actionPutDishes, dishesBasket, dishAdd,
      asyncDishAdd, dishDelete, clearDishes, dishesListReducer, actionPutStandartList, 
      dishesFastList, dishesTypes, asyncFastDish, fastDish, actionStandartList};

