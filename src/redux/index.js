import {createStore, combineReducers, applyMiddleware} from 'redux';
import {goodsCreator, goodAdd} from "./goodsCreator";
import {SagaMiddleware, rootSaga} from "../saga";


const store = createStore(combineReducers({
    newGoods: goodsCreator, 
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, goodAdd};

