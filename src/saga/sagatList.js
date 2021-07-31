import {standartList} from "../tools/createGoodsList";
import { put, takeEvery, takeLeading} from 'redux-saga/effects';
import { actionPutStandartList, actionPutFastList } from "../redux";
import { fastListTool } from "../tools";



function* dishesStandart(obj) {
    const data = standartList(obj.data);
    yield put(actionPutStandartList(data));
}


function* dishesFast(obj) {
    const data = yield fastListTool(obj.data);
    yield put(actionPutFastList(data));
}


function* dishesListChecker(){ //watcher saga
    yield takeLeading('STANDART_LIST', dishesStandart); //
    yield takeEvery("FAST_LIST", dishesFast);
}

export {dishesListChecker, dishesFast};