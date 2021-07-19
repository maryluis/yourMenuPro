import {createStore, combineReducers, applyMiddleware} from 'redux';
import {goodsCreator, goodAdd} from "./goodsCreator";
import {SagaMiddleware, rootSaga} from "../saga";
import {dishesGetter, actionGetDishes, actionPutDishes} from "./dishesGetter"



// function dishesGetter(state={}, action){

//     if (action === 'GET_DISHES'){
//         const { name="default", status, payload, error} = action
//         if (status){
//             return {
//                 ...state, [name]: {status, payload: (status === 'PENDING' && state[name] && state[name].payload) || payload, error}
//             }
//         }
//     }
//     return state;
//   }




const store = createStore(combineReducers({
    promiseData: dishesGetter,
    newGoods: goodsCreator, 
}), applyMiddleware(SagaMiddleware))


SagaMiddleware.run(rootSaga) //запуск

export {store, goodsCreator, goodAdd, dishesGetter, actionGetDishes, actionPutDishes};

