import { takeEvery, put } from "redux-saga/effects";
import {clearDishes, dishAdd, dishDelete} from "../redux"



function* addDishBask(data) {
     yield put(dishAdd(data.id, data.dish));
}

function* deleteDishBask(data) {
    yield put(dishDelete(data.id, data.dish));
}

function* clearBasket() {
    yield put(clearDishes());
}

function* checkDishBask() {
    yield takeEvery('ASYNC_DISH_ADD', addDishBask);
    yield takeEvery('ASYNC_DISH_DELETE', deleteDishBask);
    yield takeEvery('ASYNC_CLEAR_DISHES', clearBasket);
}
export default checkDishBask; 