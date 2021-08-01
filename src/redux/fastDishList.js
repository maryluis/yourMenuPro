function dishesFastList(state, {type, dishes}) {
    if(state === undefined) {
        state = {}
    }
    if(type === 'FAST_DISHES') {
        state = {...dishes};
    }

    return state
}

const asyncFastDish = (dishes) =>  {
    return ({  
    type: "ASYNC_FAST_DISHES",
    dishes: dishes
})
}

const fastDish = (dishes) => ({  
    type: "FAST_DISHES",
    dishes: dishes
})


export {dishesFastList, asyncFastDish, fastDish};