import {ingredients, dish, objToArr} from "./dishesCreator";
import {goodAdd} from "../redux";
import { takeLatest } from "@redux-saga/core/effects";





const delay = ms => new Promise(ok => setTimeout(() => ok(ms), ms));


// function * asyncGoodAdd(ms, tittle, id, howMany, ofWhat, goodType, count=1, type,) {
//     yield delay(ms);
//     yield takeLatest('yo', goodAdd(tittle, id, howMany, ofWhat, goodType, count=1, type,));
//     console.log("yes");
// }


export {ingredients, dish, delay, objToArr};