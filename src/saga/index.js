import { takeLatest, all} from 'redux-saga/effects';
import createSagaMiddleware from "redux-saga";
import {delay} from "../tools";


function* addIngr(){ //worker saga
    yield delay(1000);
    // console.log(state)
}

function* checkIngr(){ //watcher saga
    yield takeLatest('ADD_GOOD', addIngr) //
}


function* rootSaga(){ //корневая
    yield all([
        checkIngr()
    ])
}


const SagaMiddleware = createSagaMiddleware();

export {SagaMiddleware, rootSaga};
