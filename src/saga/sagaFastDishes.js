import { takeEvery, put } from "redux-saga/effects";
import {fastDish} from "../redux/fastDishList";



function* addFastDish(data) {
     yield put(fastDish(data.dishes));
}



function* checkFastDish() {
    yield takeEvery('ASYNC_FAST_DISHES', addFastDish);
}
export default checkFastDish; 
