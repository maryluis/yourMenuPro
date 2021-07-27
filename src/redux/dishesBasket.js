
function dishesBasket(state, {type, id, dish}) {

    if(state === undefined) {
        state = {}
    }
    if(type === 'DISH_ADD') {
        state = {...state, [id]: dish};
    }
    if(type === "DISH_DELETE") {
        delete state[id];
        state = {...state};
    }
    if(type === "CLEAR_DISHES") {
        state = {};
    }

    return state
}

const asyncDishAdd = (id, dish) => ({
    
    type: "ASYNC_DISH_ADD",
    id: id,
    dish: dish
})

const dishAdd = (id, dish) => ({
    type: 'DISH_ADD',
    id,
    dish
})

const asyncDishDelete = (id, dish) => ({
    type:"ASYNC_DISH_DELETE",
    id,
    dish
})

const dishDelete = (id, dish) => ({
    type:"DISH_DELETE",
    id,
    dish
})

const asyncClearDishes = () => ({
    type: "ASYNC_CLEAR_DISHES"
})

const clearDishes = () => ({
    type: "CLEAR_DISHES"
})



    export {dishesBasket, asyncDishAdd, dishAdd, asyncDishDelete, dishDelete, asyncClearDishes, clearDishes}