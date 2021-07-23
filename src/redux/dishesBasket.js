
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



const dishAdd = (id, dish) => ({
    type: 'DISH_ADD',
    id,
    dish
})
const dishDelete = (id, dish, type) => ({
    type:"DISH_DELETE",
    id,
    dish
})
const clearDishes = (type) => ({
    type: "CLEAR_DISHES"
})


export {dishesBasket, dishAdd, dishDelete, clearDishes}