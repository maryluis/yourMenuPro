import { takeEvery } from "redux-saga/effects";



function* addDishBask() {
    // debugger
    // yield put(dishAdd());
    // yield dishDelete(type, dish);
    // yield clearDishes(type, dish);
}

function* checkDishBask() {

    yield takeEvery('DISH_ADD', addDishBask);
    // yield put('DISH_DELETE', addDishBask);
    // yield put('CLEAR_DISHES', addDishBask);
}
export default checkDishBask; 