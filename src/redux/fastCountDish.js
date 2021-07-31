
function fastCountDish(state, {type, count=1}) {

    if(state === undefined) {
        state = {count}
    }

    if(type === 'CHANGE_COUNT') {
        state = {...state, count: count};
    }

    return state
}

const asyncChangeCount = (count) => ({      
    type: "ASYNC_CHANGE_COUNT",
    count: count
})

const changeCount = (count) => ({   
    type: "CHANGE_COUNT",
    count: count
})

export {fastCountDish, asyncChangeCount, changeCount};
