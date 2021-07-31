import { put, takeEvery } from "redux-saga/effects";
import { changeCount } from "../redux";


function* changeCountSaga(count) {
    yield put(changeCount(+count.count));
}

function* checkCountSaga() {
    yield takeEvery("ASYNC_CHANGE_COUNT", changeCountSaga);
}

export default checkCountSaga;