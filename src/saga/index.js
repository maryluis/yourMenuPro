import { takeLatest, all, takeEvery, put, call} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {delay, getDishes} from "../tools";
import {actionPutDishes} from "../redux";
//import { getDishes } from '../redux';


function* addIngr(){ //worker saga
    yield delay(1000);
    // console.log(state)
}

function* checkIngr(){ //watcher saga
    yield takeLatest('ADD_GOOD', addIngr) //
}


function * dishesGetter() {

    const data = yield call(getDishes);

    yield put(actionPutDishes(data));
}

function* dishesChecker(){ //watcher saga
    yield takeEvery('GET_DISHES', dishesGetter) //
}


function* rootSaga(){ //корневая
    yield all([
        checkIngr(), dishesChecker()
    ])
}



const SagaMiddleware = createSagaMiddleware();

export {SagaMiddleware, rootSaga};
