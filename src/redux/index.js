import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from "redux-saga";
import {goodsCreator, goodAdd} from "./goodsCreator";
import {delay} from "../tools";
import { call, put, takeEvery, takeLatest, all} from 'redux-saga/effects';
import {SagaMiddleware, rootSaga} from "../saga";


const store = createStore(combineReducers({
    newGoods: goodsCreator, 
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, goodAdd};

