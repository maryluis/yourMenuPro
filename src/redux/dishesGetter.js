

function dishesGetter(state = {}, action) {

    if(action.type === 'PUT_DISHES') {
        
            return {...state, 
                    dishes:action.payload.data};
    }
      return state;
}

const actionPutDishes = (payload) => {

    return({type: 'PUT_DISHES', payload})};


const actionGetDishes = () => ({type: 'GET_DISHES'});


export {dishesGetter, actionGetDishes, actionPutDishes};