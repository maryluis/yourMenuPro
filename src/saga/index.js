import { takeLatest, all, takeEvery, put, call} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {delay, getDishes} from "../tools";
import {actionPutDishes} from "../redux";
import checkDishBask from "./sagaBasketDish";
import {dishesListChecker} from "./sagaStandartList"



function* addIngr(){ //worker saga
    yield delay(1000);
}

function* checkIngr(){ //watcher saga
    yield takeLatest('ADD_GOOD', addIngr) //
}


function * dishesGetter() {

    const data = yield call(getDishes);

    yield put(actionPutDishes(data));
}

function* dishesChecker(){ //watcher saga
    yield takeEvery('GET_DISHES', dishesGetter); //
}


function* rootSaga(){ //корневая
    yield all([
        checkIngr(), dishesChecker(), checkDishBask(), dishesListChecker()
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};
