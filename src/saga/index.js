import { takeLatest, all, takeEvery, put, call} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {delay, getDishes} from "../tools";
import {actionPutDishes, goodAdd} from "../redux";
import checkDishBask from "./sagaBasketDish";
import {dishesListChecker} from "./sagatList";
import checkCountSaga from './sagaChangeCount';



function* addIngr(data){ //worker saga
    yield delay(1000);
    yield put(goodAdd(data));
}

function* checkIngr(){ //watcher saga
    yield takeLatest('ASYNC_ADD_GOOD', addIngr) //
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
        checkIngr(), 
        dishesChecker(), 
        checkDishBask(), 
        dishesListChecker(), 
        checkCountSaga()
    ])
}



const SagaMiddleware = createSagaMiddleware();


export {SagaMiddleware, rootSaga};
