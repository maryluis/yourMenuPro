import {standartList} from "../tools/createGoodsList";
import { put, takeLeading} from 'redux-saga/effects';
import { actionPutStandartList } from "../redux";



function* dishesStandart(obj) {
    const data = standartList(obj.data);
    yield put(actionPutStandartList(data));
}

function* dishesListChecker(){ //watcher saga

    yield takeLeading('STANDART_LIST', dishesStandart); //
}

export {dishesListChecker};